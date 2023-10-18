using AutoMapper;
using Employee.Model;
using Employee.Repository.Interface;
using Employee.Service.Model;
using Employee.Shared.Models;
using FluentValidation;
using MediatR;

namespace Employee.Core.CQRS.Country.Command;

public record CreateCountryCommand(VMCountries VMData):IRequest<CommandResult<VMCountries>>;

public class CreateCountryCommandHandler : IRequestHandler<CreateCountryCommand, CommandResult<VMCountries>>
{
    private readonly ICountryRepository _Repository;
    private readonly IValidator<CreateCountryCommand> _validator;
    private readonly IMapper _mapper;

    public CreateCountryCommandHandler(ICountryRepository Repository, IValidator<CreateCountryCommand> validator,IMapper mapper)
    {
        _Repository = Repository;
        _validator = validator;
        _mapper = mapper;
    }
    public async Task<CommandResult<VMCountries>> Handle(CreateCountryCommand request, CancellationToken cancellationToken)
    {
        var validate = await _validator.ValidateAsync(request, cancellationToken);
        if (!validate.IsValid)
        {
            throw new ValidationException(validate.Errors);
        }
        var data = _mapper.Map<Countries>(request.VMData);
        var result = await _Repository.InsertAsync(data);
        return result switch
        {
            null => new CommandResult<VMCountries>(null, CommandResultTypeEnum.NotFound),
            _ => new CommandResult<VMCountries>(result, CommandResultTypeEnum.Success)
        };
    }
}
