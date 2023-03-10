using AppNoteServer.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AppNoteServer.Service
{
  public class JwtAuthService : IJwtAuthService
  {
    private readonly IConfiguration _config;
    private readonly string _key;
    private readonly string _issuer;

    public JwtAuthService(IConfiguration config)
    {
      _config = config;
      _key = _config["Jwt:Key"];
      _issuer = _config["Jwt:Issuer"];
    }
    public string GenerateJwtToken(User user)
    {
      var tokenHandle = new JwtSecurityTokenHandler();
      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key));
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
          new Claim("id", user.Id.ToString()),
          new Claim("username", user.Username),
          new Claim("password", user.Password),
          new Claim("fullname", user.Fullname)
        }),
        Expires = DateTime.UtcNow.AddDays(7),
        SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature),
      };

      var token = tokenHandle.CreateToken(tokenDescriptor);

      return tokenHandle.WriteToken(token);
    }

    public bool VerifyToken(string token)
    {
      if(token == null)
      {
        throw new ArgumentNullException("Token invalid or expired");
      }

      var tokenHandle = new JwtSecurityTokenHandler();
      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key));

      try
      {
        tokenHandle.ValidateToken(token, new TokenValidationParameters
        {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = key,
          ValidateIssuer = true,
          ValidateAudience = false,
          ValidateLifetime = true,
          ValidIssuer = _issuer
        }, out SecurityToken validatedToken);
      }
      catch
      {
        return false;
      }
      return true;
    }
  }
}
