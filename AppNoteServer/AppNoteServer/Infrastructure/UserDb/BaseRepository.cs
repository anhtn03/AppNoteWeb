
namespace AppNoteServer.Infrastructure.UserDb
{
  public class BaseRepository 
  {
    private readonly UserDbContext _dbcontext;

    public BaseRepository(UserDbContext dbContext)
    {
      _dbcontext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
    }

  }
}
