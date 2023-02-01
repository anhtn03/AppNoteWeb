using AppNoteServer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppNoteServer.Infrastructure.UserDb
{
  public class EntityTypeConfiguration : IEntityTypeConfiguration<User>
  {
    public void Configure(EntityTypeBuilder<User> builder)
    {
      builder.ToTable("User")
        .HasKey(e => e.Id);

      builder.Property(e => e.Id)
        .IsRequired()
        .HasColumnType("INTEGER");

      builder.Property(e => e.Username)
        .IsRequired()
        .HasColumnType("VARCHAR(25)");

      builder.Property(e => e.Password)
        .IsRequired()
        .HasColumnType("VARCHAR(50)");

      builder.Property(e => e.Fullname)
        .IsRequired()
        .HasColumnType("VATCHAR(50)");
    }
  }
}
