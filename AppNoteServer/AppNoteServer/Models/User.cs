using System.Text.Json.Serialization;

namespace AppNoteServer.Models
{
  public class User
  {
    public int Id { get; set; }

    public string Username { get; set; }

    public string Fullname { get; set; }

    [JsonIgnore]
    public string Password { get; set; }
  }
}
