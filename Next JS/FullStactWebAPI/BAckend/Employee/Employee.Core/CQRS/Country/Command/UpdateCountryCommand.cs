using AutoMapper;
using Employee.Model;
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

namespace Employee.Core.CQRS.Country.Command;

public record UpdateContryCommand(int Id, VMCountries VMData) : IRequest<CommandResult<VMCountries>>;

public class UpdateContryCommandHandler : IRequestHandler<UpdateContryCommand, CommandResult<VMCountries>>
{
    private readonly ICountryRepository _Repository;
    private readonly IValidator<UpdateContryCommand> _validator;
    private readonly IMapper _mapper;

    public UpdateContryCommandHandler(ICountryRepository Repository, IValidator<UpdateContryCommand> validator, IMapper mapper)
    {
        _Repository = Repository;
        _validator = validator;
        _mapper = mapper;
    }
    public async Task<CommandResult<VMCountries>> Handle(UpdateContryCommand request, CancellationToken cancellationToken)
    {
        var validate = await _validator.ValidateAsync(request, cancellationToken);
        if (!validate.IsValid)
        {
            throw new ValidationException(validate.Errors);
        }
        var data = _mapper.Map<Countries>(request.VMData);
        var result = await _Repository.UpdateAsync(request.Id, data);
        return result switch
        {
            null => new CommandResult<VMCountries>(null, CommandResultTypeEnum.UnprocessableEntity),
            _ => new CommandResult<VMCountries>(result, CommandResultTypeEnum.Success)
        };
    }
}
