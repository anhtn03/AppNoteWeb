namespace AppNoteServer.Infrastructure.UserDb
{
  public interface IUnitOfWork
  {
    Task CommitAsync(CancellationToken cancellationToken= default);
  }
}
