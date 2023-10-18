using AutoMapper;
using Employee.Infrastructure.Presistance;
using Employee.Model;
using Employee.Repository.Interface;
using Employee.Service.Model;

namespace Employee.Repository.Concrete;

public class CountryRepository:RepositoryBase<Countries,VMCountries,int>,ICountryRepository
{
    public CountryRepository(EmployeeDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
    {
        
    }
}
