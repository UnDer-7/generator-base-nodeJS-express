'use strict';

// ---------------TO DO---------------
// RENAME THE CLASS CONTROLLER

const Generator = require('yeoman-generator');
const path = require('path')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...')
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Type your project name'
      },
      {
        type: 'confirm',
        name: 'controllerOption',
        message: 'Would you like to generate a route controller separately?'
      }
    ])

    if (this.answers.controllerOption) {
      this.controllerName = await this.prompt({
        type: 'input',
        name: 'controllerName',
        message: `What's the name of the controller?`
      })
    }

  }

  start() {
    this._private_src()

    this._private_gitignore()

    this._private_editorconfig()

    this._private_eslint()

    this._private_packageJson()

    if (this.answers.controllerOption) {
      this._private_separately_controller()
    }
    // this.npmInstall();
  }

  _private_src() {
    this.destinationRoot(path.resolve(this.answers.projectName, 'src'));
    this.fs.copyTpl(
      this.templatePath('./src/server.js'),
      this.destinationPath('server.js')
    )
    this.fs.copyTpl(
      this.templatePath('./src/index.js'),
      this.destinationPath('index.js')
    )

    if (this.answers.controllerOption) {
      this.fs.copyTpl(
        this.templatePath('./src/routesV1.js'),
        this.destinationPath('routes.js')
      )
    }else {
      this.fs.copyTpl(
        this.templatePath('./src/routesV2.js'),
        this.destinationPath('routes.js')
      )
    }
  }

  _private_separately_controller() {
    this.destinationRoot(path.resolve('src', 'app', 'controller'))
    this.fs.copyTpl(
      this.templatePath('./src/app/controller/TestController.js'),
      this.destinationPath(`${this.controllerName.controllerName}Controller.js`),
      {
        info: this.controllerName.controllerName
      }
    )
  }

  _private_routes() {
    this.destinationPath()
  }

  _private_gitignore() {
    this.destinationRoot('../');
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    )
  }

  _private_editorconfig() {
    this.fs.copyTpl(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    )
  }

  _private_eslint() {
    this.fs.copyTpl(
      this.templatePath('.eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    )
  }

  _private_packageJson() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    )
  }
};
