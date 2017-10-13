# aspnet-scaffolder
### Lightweight ASP.NET Model &amp; View &amp; Controller scaffolding tool


## Installation:

Install the package globally:

`npm install aspnet-scaffolder -g`

## Usage:

Call the script with the name of your model:

`aspnet-scaffolder Book`

This tool does verify that your model doesn't exist before creating it, so don't overwrite accidentally!

The output will be:

```
-Models
----Book.cs
-Views
----Book
--------Create.cshtml
--------Delete.cshtml
--------Details.cshtml
--------Edit.cshtml
--------Index.cshtml
-Controllers
----BookController.cs
```
