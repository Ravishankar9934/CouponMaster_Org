using CouponMaster.DependencyResolver; // Import our resolver

var builder = WebApplication.CreateBuilder(args);

// 1. Add Services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// *** OUR CUSTOM LINE ***
// This calls the method we wrote in the DependencyResolver project.
// It registers Repository, Manager, etc.
builder.Services.RegisterServices();

// Define the policy name
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("http://localhost:4200") // The Angular URL
                                .AllowAnyHeader()
                                .AllowAnyMethod(); // Allow GET, POST, PUT, DELETE
                      });
});

var app = builder.Build();

// 2. Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(MyAllowSpecificOrigins);

app.MapControllers();

app.Run();