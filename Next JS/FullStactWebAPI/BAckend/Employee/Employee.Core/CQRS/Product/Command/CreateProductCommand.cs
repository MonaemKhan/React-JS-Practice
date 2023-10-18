using AutoMapper;
using Employee.Model;
using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using MediatR;
using Microsoft.AspNetCore.Hosting;

namespace Employee.Core.CQRS.Product.Command;

public record CreateProductCommand(VMProduct VMData) : IRequest<CommandResult<VMProduct>>;

public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, CommandResult<VMProduct>>
{
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly IProductRepository _Repository;
    private readonly IMapper _mapper;

    public CreateProductCommandHandler(IProductRepository Repository, IMapper mapper, IWebHostEnvironment webHostEnvironment)
    {
        _Repository = Repository;
        _webHostEnvironment = webHostEnvironment;
        _mapper = mapper;
    }
    public async Task<CommandResult<VMProduct>> Handle(CreateProductCommand request, CancellationToken cancellationToken)
    {
        if(request.VMData.ImageFile?.Length > 0)
        {
            string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "images/profile");
            string uniqueFileName = Guid.NewGuid().ToString() + "_" + request.VMData.ImageFile.FileName;
            string filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create, access: FileAccess.ReadWrite))
            {
                var file = request.VMData.ImageFile.OpenReadStream();
                await file.CopyToAsync(fileStream, cancellationToken);
            }
            request.VMData.ImagePath = "images/profile/" + uniqueFileName;
        }
        var data = _mapper.Map<Producct>(request.VMData);
        var result = await _Repository.InsertAsync(data);
        return result switch
        {
            null => new CommandResult<VMProduct>(null, CommandResultTypeEnum.NotFound),
            _ => new CommandResult<VMProduct>(result, CommandResultTypeEnum.Success)
        };
    }
}