#! /usr/bin/env node

const fse = require('fs-extra');
const figlet = require('figlet');
const util = require('./util/util.js');
const CONTROLLERS = 'Controllers';
const MODELS = 'Models';
const VIEWS = 'Views';
const controller = require('./templates/controller.js');
const model = require('./templates/model.js');
const views = [
  require('./templates/views/create.js'),
  require('./templates/views/edit.js'),
  require('./templates/views/details.js'),
  require('./templates/views/delete.js'),
  require('./templates/views/index.js')
];

let modelName;
if (!process.argv[2]) {
  console.log('Please pass a model name as a command-line argument! (i.e. "aspnet-scaffolder Person"');
  process.exit(1);
}
else {
  modelName = process.argv[2];
}

// Print out the figlet
process.title = 'aspnet-scaffolder';
console.log(figlet.textSync(process.title, {
  font: 'Big',
  horizontalLayout: 'fitted',
  verticalLayout: 'Default'
}), '\nASP.NET MVC Scaffolding Tool\n');

// Ensure controllers directory exists.
fse.ensureDir(`${process.cwd()}/${CONTROLLERS}`, err => {
  if (err) console.log(err);

  // With model name, create controller
  fse.writeFile(`${process.cwd()}/${CONTROLLERS}/${modelName}Controller.cs`, util.controller(controller.controller, modelName), 'utf-8', (err) => {
    if (err) console.log(err);
    console.log(`Created ${CONTROLLERS}/${modelName}Controller.`);
  });
});

// Ensure models directory exists.
fse.ensureDir(`${process.cwd()}/${MODELS}`, err => {
  if (err) console.log(err);
  
  // Create Model
  fse.writeFile(`${process.cwd()}/${MODELS}/${modelName}.cs`, util.model(model.model, modelName, '${CLASS}'), 'utf-8', (err) => {
    if (err) console.log(err);
    console.log(`Created ${MODELS}/${modelName}.cs.`);
  });
});

// Ensure views directory structure exists. (./Views/${modelName})
fse.ensureDir(`${process.cwd()}/${VIEWS}/${modelName}`, (err) => {
  if (err) console.log(err);

  // Create views
  views.forEach((view) => {
    fse.writeFile(`${process.cwd()}/${VIEWS}/${modelName}/${view.name}`, util.view(view.template, modelName), 'utf-8', (err) => {
      if (err) console.log(err);
      console.log(`Created ${VIEWS}/${modelName}/${view.name}.`);
    });
  });
});
