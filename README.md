# aspnet-scaffolder
### Lightweight ASP.NET Model &amp; View &amp; Controller scaffolding tool


After installing, add this line to NPM scripts in your package.json:

`"scaffold" : "./node_modules/scaffold/src/scaffold/scaffold.js"`

Usage - call the script with the name of your model:

`npm scaffold Book`

This tool does verify that your model doesn't exist before creating it.
