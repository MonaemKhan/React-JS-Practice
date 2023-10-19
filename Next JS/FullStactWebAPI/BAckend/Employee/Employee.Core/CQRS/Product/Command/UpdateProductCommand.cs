using AutoMapper;
using Employee.Model;
using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Hosting;

namespace Employee.Core.CQRS.Product.Command;

public record UpdateProductCommand(int Id, VMProduct VMData) : IRequest<CommandResult<VMProduct>>;

public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, CommandResult<VMProduct>>
{
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly IProductRepository _Repository;
    private readonly IMapper _mapper;

    public UpdateProductCommandHandler(IProductRepository Repository, IMapper mapper, IWebHostEnvironment webHostEnvironment)
    {
        _Repository = Repository;
        _mapper = mapper;
        _webHostEnvironment = webHostEnvironment;
    }
    public async Task<CommandResult<VMProduct>> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
    {
        if (request.VMData.ImageFile?.Length != null)
        {
            var de_path = Path.Combine(_webHostEnvironment.WebRootPath +"/"+request.VMData.ImagePath);
            if (System.IO.File.Exists(de_path))
            {
                System.IO.File.Delete(de_path);
            }
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
        var result = await _Repository.UpdateAsync(request.Id, data);
        return result switch
        {
            null => new CommandResult<VMProduct>(null, CommandResultTypeEnum.UnprocessableEntity),
            _ => new CommandResult<VMProduct>(result, CommandResultTypeEnum.Success)
        };
    }
}