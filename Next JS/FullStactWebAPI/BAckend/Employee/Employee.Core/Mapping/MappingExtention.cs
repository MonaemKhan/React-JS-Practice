using AutoMapper;
using Employee.Model;
using Employee.Service.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Core.Mapping;

public class MappingExtention:Profile
{
    public MappingExtention()
    {
        CreateMap<VMEmployee, Employees>().ReverseMap();
        CreateMap<VMCountries, Countries>().ReverseMap();
        CreateMap<VMProduct, Producct>().ReverseMap()
            .ForMember(x => x.CountryName, x => x.MapFrom(x => x.Countries.CountryName != null ? x.Countries.CountryName : ""));
    }

}
