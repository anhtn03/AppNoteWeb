using AppNoteServer.Models;
using Microsoft.EntityFrameworkCore;

namespace AppNoteServer.Infrastructure.UserDb
{
  public class UserDbContext : DbContext, IUnitOfWork
  {
    protected readonly IConfiguration _Configuration;

    public UserDbContext(IConfiguration configuration)
    {
      _Configuration = configuration;
    }

    protected void Onconfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      var connectionString = _Configuration.GetConnectionString("connectionString");

      if (string.IsNullOrEmpty(connectionString))
        throw new ArgumentNullException(nameof(connectionString));

      optionsBuilder.UseSqlite(connectionString);
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
