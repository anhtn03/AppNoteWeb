using AppNoteServer.Models;

namespace AppNoteServer.Service
{
  public interface IAuthService
  {
    Task<string> QueryUserAsync(AuthReq authReq, CancellationToken cancellationToken= default);
  }
}
