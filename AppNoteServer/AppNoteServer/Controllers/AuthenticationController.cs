using AppNoteServer.Models;
using AppNoteServer.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AppNoteServer.Controllers
{
  [AllowAnonymous]
  [Route("api/authentication")]
  [ApiController]
  public class AuthenticationController: ControllerBase
  {
    private readonly IAuthService _authService;

    public AuthenticationController(IAuthService authService)
    {
      _authService = authService ?? throw new ArgumentNullException(nameof(authService));
    }

    [HttpPost]
    public async Task<AuthResp> QueryUserAuth([FromBody]AuthReq req, CancellationToken cancellationToken)
    {
      var query = await _authService.QueryUserAsync(new AuthReq
      {
        Username= req.Username,
        Password= req.Password,
      });

      return new AuthResp
      {
        Token = query,
        Expires = DateTime.UtcNow.AddDays(7)
      };
    }
  }
}
