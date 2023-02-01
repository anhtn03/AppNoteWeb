using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace AppNoteServer.Core.Common
{
  public class QueryResults
  {
    public List<Model> Result { get; set; }

    public QueryResults(List<Model> result)
    {
      Result = result;
    }
  }
}
