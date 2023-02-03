using AppNoteServer.Models;
using Microsoft.EntityFrameworkCore;

namespace AppNoteServer.Infrastructure.UserDb
{
  public class UserDbContext : DbContext, IUnitOfWork
  {
    public UserDbContext(string connectionString)
            : base(GetOptions(connectionString)) { }

    private static DbContextOptions GetOptions(string connectionString)
    {
      if (string.IsNullOrEmpty(connectionString))
        throw new ArgumentNullException(nameof(connectionString));

      return new DbContextOptionsBuilder()
          .UseSqlite(connectionString).Options;
    }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.ApplyConfiguration(new EntityTypeConfiguration());
      base.OnModelCreating(modelBuilder);
    }
    public Task CommitAsync(CancellationToken cancellationToken = default)
    {
      return SaveChangesAsync(cancellationToken);
    }
  }
}
