# aspnet-scaffolder
### Lightweight ASP.NET Model &amp; View &amp; Controller scaffolding tool

## Installation:

Install the package globally:

`npm install aspnet-scaffolder -g`

## Usage:

Call the script with the name of your model:

`aspnet-scaffolder Person`

This tool doesn't verify that your model exists before creating it, so don't overwrite accidentally!

The output will be:

```
-Models
----Person.cs
-Views
----Person
--------Create.cshtml
--------Delete.cshtml
--------Details.cshtml
--------Edit.cshtml
--------Index.cshtml
-Controllers
----PersonController.cs
```
