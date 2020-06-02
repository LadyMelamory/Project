using Microsoft.EntityFrameworkCore.Migrations;

namespace Project.Migrations
{
    public partial class Test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Categories",
                table: "Courses");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Courses_IDCategory",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "IDCategory",
                table: "Courses");

            migrationBuilder.AddColumn<int>(
                name: "CountLessons",
                table: "Courses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IDSchool",
                table: "Courses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IDSubgect",
                table: "Courses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NamberClass",
                table: "Courses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Courses_IDSchool",
                table: "Courses",
                column: "IDSchool");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_IDSubgect",
                table: "Courses",
                column: "IDSubgect");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_School",
                table: "Courses",
                column: "IDSchool",
                principalTable: "School",
                principalColumn: "IDSchool",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Subject",
                table: "Courses",
                column: "IDSubgect",
                principalTable: "Subject",
                principalColumn: "IDSubject",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_School",
                table: "Courses");

            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Subject",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_IDSchool",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_IDSubgect",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "CountLessons",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "IDSchool",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "IDSubgect",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "NamberClass",
                table: "Courses");

            migrationBuilder.AddColumn<int>(
                name: "IDCategory",
                table: "Courses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    IDCategory = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameCatrgory = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.IDCategory);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_IDCategory",
                table: "Courses",
                column: "IDCategory");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Categories",
                table: "Courses",
                column: "IDCategory",
                principalTable: "Categories",
                principalColumn: "IDCategory",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
