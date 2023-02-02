using AppNoteServer.Core.UserRepo.Repositories;
using AppNoteServer.Models;

namespace AppNoteServer.Infrastructure.UserDb
{
  public class UserRepository : BaseRepository<User>, IUserRepository
  {
    public UserRepository(UserDbContext dbContext) : base(dbContext)
    {
    }
  }
}
