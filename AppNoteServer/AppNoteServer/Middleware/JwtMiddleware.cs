using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace AppNoteServer.Middleware
{
  public class JwtMiddleware
  {
    private readonly RequestDelegate _next;
    private readonly IConfiguration _config;

    public JwtMiddleware(RequestDelegate next, IConfiguration config)
    {
      _next = next;
      _config = config;
    }

    public async Task Invoke(HttpContext context)
    {
      var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

      if (token != null)

      AttachUserToContext(context, token);

      await _next(context);

    }

    public void AttachUserToContext(HttpContext context, string token)
    {
      try
      {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:key"]));

        tokenHandler.ValidateToken(token, new TokenValidationParameters
        {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = key,
          ValidateIssuer = false,
          ValidateAudience = false,
          ClockSkew = TimeSpan.Zero
        }, out SecurityToken validatedToken);

        var JwtToken = (JwtSecurityToken)validatedToken;

        context.Items["User"] = JwtToken.Claims.First(id => id.Type == "id").Value;
      }
      catch
      {
        throw new UnauthorizedAccessException("Authorized token invalid");
      }
    }
  }
}
