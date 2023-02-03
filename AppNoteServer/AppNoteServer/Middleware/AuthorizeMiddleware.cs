using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace AppNoteServer.Middleware
{
  [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
  public class AuthorizeMiddleware : Attribute, IAuthorizationFilter
  {
    public void OnAuthorization(AuthorizationFilterContext context)
    {
      var user = context.HttpContext.Items["User"];
      if (user == null)
      {
        context.Result = new JsonResult(new {message = "Unauthorized"}) { StatusCode = StatusCodes.Status401Unauthorized };
      }
    }
  }
}
