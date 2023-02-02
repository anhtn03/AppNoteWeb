using AppNoteServer.Models;

namespace AppNoteServer.Service
{
  public interface IJwtAuthService
  {
    string GenerateJwtToken(User user);

    bool VerifyToken(string token);
  }
}
