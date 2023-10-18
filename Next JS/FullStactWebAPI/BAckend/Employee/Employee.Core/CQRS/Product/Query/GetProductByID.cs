using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Core.CQRS.Product.Query;

public record GetProductByIDQuery(int Id) : IRequest<QueryResult<VMProduct>>;

public class GetProductByIDQueryHandler : IRequestHandler<GetProductByIDQuery, QueryResult<VMProduct>>
{
    private readonly IProductRepository _Repository;

    public GetProductByIDQueryHandler(IProductRepository Repository)
    {
        _Repository = Repository;
    }

    public async Task<QueryResult<VMProduct>> Handle(GetProductByIDQuery request, CancellationToken cancellationToken)
    {
        var data = await _Repository.GetByIdAsync(x=> x.Id == request.Id,x=>x.Countries);
        return data switch
        {
            null => new QueryResult<VMProduct>(null, QueryResultTypeEnum.NotFound),
            _ => new QueryResult<VMProduct>(data, QueryResultTypeEnum.Success)
        };
    }
}