var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

{
  var service = builder.Services;
  service.AddCors();
  service.AddControllers();
}


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
