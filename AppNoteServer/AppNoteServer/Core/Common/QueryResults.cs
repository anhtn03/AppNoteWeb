using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace AppNoteServer.Core.Common
{
  public class QueryResults<TModel>
  {
    public List<TModel> Result { get; }

    public QueryResults(List<TModel> result)
    {
      Result = result;
    }
  }
}
