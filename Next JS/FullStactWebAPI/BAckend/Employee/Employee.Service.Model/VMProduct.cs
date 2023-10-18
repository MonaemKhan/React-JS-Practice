using Employee.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Service.Model;

public class VMProduct:IVM
{
    public int Id { get; set; }
    public string ProductName { get; set; }
    public string Description { get; set; }
    public string? CountryName { get; set; }
    public int CountryId { get; set; }
    public double Rating { get; set; }
    public double price { get; set; }
    public double SellPrice { get; set; }
    public string BarCode { get; set; }
    public string? ImagePath { get; set; }
    public IFormFile? ImageFile { get; set; }
}
