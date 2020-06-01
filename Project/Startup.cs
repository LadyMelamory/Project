using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


namespace Project
{
    public class Startup
    {
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options => options.EnableEndpointRouting = false);
            services.AddSession();
           
        }

      
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            DefaultFilesOptions options = new DefaultFilesOptions();
           // options.DefaultFileNames.Clear(); // удаляем имена файлов по умолчанию
            options.DefaultFileNames.Add("LoginPage.cshtml"); // добавляем новое имя файла
            app.UseDefaultFiles(options); // установка параметров

            //app.UseStaticFiles();
            app.UseDeveloperExceptionPage();
            app.UseStatusCodePages();
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
            app.UseSession();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Login}/{action=LoginPage}/{id?}");
            });
            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapRazorPages();  // Добавляем маршрутизацию для RazorPages
            //});
        }

       
    }

    
}
