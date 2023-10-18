using Employee.Model;
using Employee.Shared.Enums;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Employee.Infrastructure.Presistance.Configarations;

public class ProductConfiguration : IEntityTypeConfiguration<Producct>
{
    public void Configure(EntityTypeBuilder<Producct> builder)
    {
        builder.ToTable("Product", schema: "Emp");
        builder.HasKey(x => x.Id);
        builder.HasIndex(x => x.ProductName);
        builder.HasOne(x=>x.Countries).WithMany(x=>x.product).HasForeignKey(x => x.CountryId);
        builder.HasData(new
        {
            Id = 1,
            ProductName = "xyzz",
            Description = "aaaaaaaaaaaaaaaaaaaa",
            CountryId = 1,
            Rating = 5.5,
            price = 20.0,
            SellPrice = 30.0,
            BarCode = "qoooo",
            ImagePath = "",
            CreatedBy = "1",
            Created = DateTimeOffset.Now,
            Status = EntityStatus.Created
        });
    }
}