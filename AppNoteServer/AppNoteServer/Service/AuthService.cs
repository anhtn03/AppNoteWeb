using AppNoteServer.Models;

namespace AppNoteServer.Service
{
  public class AuthService : IAuthService
  {
    private readonly IConfiguration _config;
    private readonly string _key;
    private readonly string __issuer;

    private readonly IAuthService _authService;

    public AuthService(IAuthService authService, IConfiguration config)
    {
      _authService = authService ?? throw new ArgumentNullException(nameof(authService));
      _config = config;
      _key = _config["Jwt:Key"];
      __issuer = _config["Jwt:Issuer"];
    }

    public string GenerateJwtToken(User user)
    {
      throw new NotImplementedException();
    }

    public async Task<string> QueryUserAsync(AuthReq authReq, CancellationToken cancellationToken = default)
    {
      if (authReq.Username == null || authReq.Password == null) throw new ArgumentNullException("Username or Password invalid");

      return GenerateJwtToken(new User {
        Username = authReq.Username,
        Password = authReq.Password,
      });
    }

    public bool VerifyToken(string token)
    {
      throw new NotImplementedException();
    }
  }
}
