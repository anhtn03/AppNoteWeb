
using AppNoteServer.Core.Common;
using AppNoteServer.Core.UserRepo.Repositories;
using Microsoft.EntityFrameworkCore;

namespace AppNoteServer.Infrastructure.UserDb
{
  public class BaseRepository<TModel> : IBaseRepository<TModel> where TModel : class
  {
    private readonly UserDbContext _dbcontext;

    public BaseRepository(UserDbContext dbContext)
    {
      _dbcontext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
    }

    public async Task<QueryResults<TModel>> GetUserAsync(QueryParams<TModel> @params, CancellationToken cancellationToken)
    {
      var filter = _dbcontext.Set<TModel>().AsQueryable();

      if(@params.Filters != null)
      {
        filter = filter.Where(@params.Filters).AsNoTracking();
      }

      var result = await filter.ToListAsync(cancellationToken);

      return new QueryResults<TModel>(result);
    }
  }
}
