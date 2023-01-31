using System;

namespace AppNoteServer.Models
{
  public class AuthResp
  {
    public string Token { get; set; }

    public DateTime Expires { get; set; }

  }
}
