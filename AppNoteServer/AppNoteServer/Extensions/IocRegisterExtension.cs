using AppNoteServer.Core.UserRepo.Repositories;
using AppNoteServer.Infrastructure.UserDb;
using AppNoteServer.Service;

namespace AppNoteServer.Extensions
{
  public static class IocRegisterExtension
  {
    private const string UserDbConnectionKey = "UserDb";

    public static void AddUserDb(this IServiceCollection services, IConfiguration configuration)
    {
      services.AddScoped(sp =>
      {
        return new UserDbContext(configuration.GetConnectionString(UserDbConnectionKey));
      });

      services.AddScoped<IUnitOfWork>(sp => sp.GetRequiredService<UserDbContext>());
      services.AddScoped<IUserRepository, UserRepository>();
    }

    public static void AddCoreService(this IServiceCollection services)
    {
      services.AddScoped<IJwtAuthService, JwtAuthService>();
      services.AddScoped<IAuthService, AuthService>();
    }
  }
}
