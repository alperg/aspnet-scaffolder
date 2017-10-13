#! /usr/bin/env node

const fse = require('fs-extra'),
      figlet = require('figlet'),
      controller = require('../heredocs/controller.js'),
      model = require('../heredocs/model.js'),
      views = [require('../heredocs/views/create.js'),
              require('../heredocs/views/edit.js'),
              require('../heredocs/views/details.js'),
              require('../heredocs/views/delete.js'),
              require('../heredocs/views/index.js')],
      substitute = require('./substitute.js');

const version = require('../../package.json').version;

const CONTROLLERS = "Controllers",
      MODELS = "Models",
      VIEWS = "Views";

let model_name;
if (!process.argv[2]) {
  console.log("Please pass a ModelName as a command-line argument.");
  process.exit(1);
}
else {
  model_name = process.argv[2];
}

process.title = "aspnet-scaffolder";

console.log(figlet.textSync(process.title, {
  font: 'Big',
  horizontalLayout: 'fitted',
  verticalLayout: 'Default'
}), '\nASP.NET Scaffolding Tool v' + version + '\n')

// Ensure appropriate directory structure exists.
// For views, we must have ./Views/${model_name}.
[CONTROLLERS, MODELS, VIEWS].forEach((dir) => {
  fse.ensureDir(`${process.cwd()}/${dir}`, (err) => {
    console.log(err);

    fse.ensureDir(`${process.cwd()}/${VIEWS}/${model_name}`, (err) => {
      console.log(err);

      /* **************************************************************** */
      // Create Model
      fse.writeFile(`${process.cwd()}/${MODELS}/${model_name}.cs`, substitute.model(model.model, model_name, "${CLASS}"), 'utf-8', (err) => {
        if (err) console.log(err);
        console.log(`Created ${MODELS}/${model_name}.cs.`);
      });

      // With model name, create controller
      fse.writeFile(`${process.cwd()}/${CONTROLLERS}/${model_name}Controller.cs`, substitute.controller(controller.controller, model_name), 'utf-8', (err) => {
        if (err) console.log(err);
        console.log(`Created ${CONTROLLERS}/${model_name}Controller.`);
      });

      // Create views
      views.forEach((view) => {
        fse.writeFile(`${process.cwd()}/${VIEWS}/${model_name}/${view.name}`, substitute.view(view.template, model_name), 'utf-8', (err) => {
          if (err) console.log(err);
          console.log(`Created ${VIEWS}/${model_name}/${view.name}.`);
        });
      });
    });
  });
});




