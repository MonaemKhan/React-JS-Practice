using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Employee.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Create : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Emp");

            migrationBuilder.CreateTable(
                name: "Country",
                schema: "Emp",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryName = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Courencies = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                schema: "Emp",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                schema: "Emp",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CountryId = table.Column<int>(type: "int", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: false),
                    price = table.Column<double>(type: "float", nullable: false),
                    SellPrice = table.Column<double>(type: "float", nullable: false),
                    BarCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Product_Country_CountryId",
                        column: x => x.CountryId,
                        principalSchema: "Emp",
                        principalTable: "Country",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                schema: "Emp",
                table: "Country",
                columns: new[] { "Id", "CountryName", "Courencies", "Created", "CreatedBy", "LastModified", "LastModifiedBy", "Status" },
                values: new object[,]
                {
                    { 1, "BanglaDesh", "Taka", new DateTimeOffset(new DateTime(2023, 10, 18, 12, 47, 58, 716, DateTimeKind.Unspecified).AddTicks(6558), new TimeSpan(0, 6, 0, 0, 0)), "1", null, null, 1 },
                    { 2, "India", "Rupi", new DateTimeOffset(new DateTime(2023, 10, 18, 12, 47, 58, 716, DateTimeKind.Unspecified).AddTicks(6591), new TimeSpan(0, 6, 0, 0, 0)), "1", null, null, 1 }
                });

            migrationBuilder.InsertData(
                schema: "Emp",
                table: "Employee",
                columns: new[] { "Id", "Address", "Age", "Created", "CreatedBy", "FirstName", "LastModified", "LastModifiedBy", "LastName", "PhoneNumber", "Status" },
                values: new object[,]
                {
                    { 1, "Dhaka", 26, new DateTimeOffset(new DateTime(2023, 10, 18, 12, 47, 58, 717, DateTimeKind.Unspecified).AddTicks(8780), new TimeSpan(0, 6, 0, 0, 0)), "1", "M.A. Monaem", null, null, "Khan", "01303271849", 1 },
                    { 2, "Dhaka", 26, new DateTimeOffset(new DateTime(2023, 10, 18, 12, 47, 58, 717, DateTimeKind.Unspecified).AddTicks(8795), new TimeSpan(0, 6, 0, 0, 0)), "1", "M.A.", null, null, "Khan", "013", 1 }
                });

            migrationBuilder.InsertData(
                schema: "Emp",
                table: "Product",
                columns: new[] { "Id", "BarCode", "CountryId", "Created", "CreatedBy", "Description", "ImagePath", "LastModified", "LastModifiedBy", "ProductName", "Rating", "SellPrice", "Status", "price" },
                values: new object[] { 1, "qoooo", 1, new DateTimeOffset(new DateTime(2023, 10, 18, 12, 47, 58, 721, DateTimeKind.Unspecified).AddTicks(5293), new TimeSpan(0, 6, 0, 0, 0)), "1", "aaaaaaaaaaaaaaaaaaaa", "", null, null, "xyzz", 5.5, 30.0, 1, 20.0 });

            migrationBuilder.CreateIndex(
                name: "IX_Country_CountryName",
                schema: "Emp",
                table: "Country",
                column: "CountryName");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_FirstName",
                schema: "Emp",
                table: "Employee",
                column: "FirstName");

            migrationBuilder.CreateIndex(
                name: "IX_Product_CountryId",
                schema: "Emp",
                table: "Product",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Product_ProductName",
                schema: "Emp",
                table: "Product",
                column: "ProductName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employee",
                schema: "Emp");

            migrationBuilder.DropTable(
                name: "Product",
                schema: "Emp");

            migrationBuilder.DropTable(
                name: "Country",
                schema: "Emp");
        }
    }
}
