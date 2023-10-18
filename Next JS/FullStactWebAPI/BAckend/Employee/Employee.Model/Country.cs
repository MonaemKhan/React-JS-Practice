using Employee.Shared.Common;
using Employee.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Model;

public class Countries : BaseAuditableEntity, IEntity<int>
{
    public int Id { get; set; }
    public string? CountryName { get; set; }
    public string? Courencies {  get; set; }

    public ICollection<Producct> product = new HashSet<Producct>();
}
