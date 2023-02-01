using System.Linq.Expressions;

namespace AppNoteServer.Core.Common
{
  public class QueryParams<TModel>
  {
    public Expression<Func<TModel, bool>> Filters { get; set;}

    public QueryParams(Expression<Func<TModel, bool>> filters)
    {
      Filters = filters;
    }

    public QueryParams()
    {
      Filters = null;
    }
  }
}
