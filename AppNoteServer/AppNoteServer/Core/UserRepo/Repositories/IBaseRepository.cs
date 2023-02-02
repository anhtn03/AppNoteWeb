using AppNoteServer.Core.Common;

namespace AppNoteServer.Core.UserRepo.Repositories
{
  public interface IBaseRepository<TModel>
  {
    Task<QueryResults<TModel>> GetUserAsync(QueryParams<TModel> @params, CancellationToken cancellationToken);
  }
}
