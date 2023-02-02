using AppNoteServer.Core.Common;
using AppNoteServer.Core.UserRepo.Repositories;
using AppNoteServer.Models;
using System.Linq.Expressions;

namespace AppNoteServer.Service
{
  public class AuthService : IAuthService
  {
    private readonly IJwtAuthService _jwtAuthService;
    private readonly IUserRepository _userRepository;

    public AuthService(IUserRepository userRepository, IJwtAuthService jwtAuthService)
    {
      _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
      _jwtAuthService = jwtAuthService ?? throw new ArgumentNullException(nameof(jwtAuthService));
    }

    public async Task<string> QueryUserAsync(AuthReq authReq, CancellationToken cancellationToken = default)
    {
      if (authReq.Username == null || authReq.Password == null)
        throw new ArgumentNullException("Username or Password invalid");

      Expression<Func<User, bool>> filters = user => authReq.Username == user.Username && authReq.Password == user.Password;

      var query = _userRepository.GetUserAsync(new QueryParams<User>(filters), cancellationToken);
      var currentUser = query.Result.Result.First();

      if(query.Result.Result.Count == 0)
      {
        throw new UnauthorizedAccessException("Wrong user or password");
      }
     
      return _jwtAuthService.GenerateJwtToken(new User {
        Id = currentUser.Id,
        Username = currentUser.Username,
        Password = currentUser.Password,
        Fullname = currentUser.Fullname
      });
    }
  }
}
