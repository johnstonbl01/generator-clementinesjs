'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('/clementinejs-angular/app'),
        this.destinationPath('/app')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-angular/public'),
        this.destinationPath('/public')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-angular/LICENSE.md'),
        this.destinationPath('/LICENSE.md')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-angular/package.json'),
        this.destinationPath('/package.json')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-angular/server.js'),
        this.destinationPath('/server.js')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-angular/.npmignore'),
        this.destinationPath('/.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
