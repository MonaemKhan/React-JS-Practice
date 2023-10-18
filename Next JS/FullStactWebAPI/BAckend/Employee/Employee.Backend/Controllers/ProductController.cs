using Employee.Core.CQRS.Country.Command;
using Employee.Core.CQRS.Country.Query;
using Employee.Core.CQRS.Product.Command;
using Employee.Core.CQRS.Product.Query;
using Employee.Service.Model;
using Microsoft.AspNetCore.Mvc;

namespace Employee.Backend.Controllers;

public class ProductController : APIController
{
    [HttpGet]
    public async Task<ActionResult<VMProduct>> GetAllProduct()
    {
        return await HandleQueryAsync(new GetAllProductQuery());
    }

    [HttpGet("Id:int")]
    public async Task<ActionResult<VMProduct>> GetCountry(int Id)
    {
        return await HandleQueryAsync(new GetProductByIDQuery(Id));
    }

    [HttpPost]
    public async Task<ActionResult<VMProduct>> InsertCountry([FromForm] VMProduct data)
    {
        return await HandleCommandAsync(new CreateProductCommand(data));
    }

    [HttpPut]
    public async Task<ActionResult<VMProduct>> UpdateCountry(int Id, [FromForm] VMProduct data)
    {
        return await HandleCommandAsync(new UpdateProductCommand(Id, data));
    }

    [HttpDelete]
    public async Task<ActionResult<VMProduct>> DeleteCountry(int Id)
    {
        return await HandleCommandAsync(new DeleteProductCommand(Id));
    }
}
