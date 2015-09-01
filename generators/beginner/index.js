'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('/clementinejs-beginner/app'),
        this.destinationPath('/app')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-beginner/public'),
        this.destinationPath('/public')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-beginner/LICENSE.md'),
        this.destinationPath('/LICENSE.md')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-beginner/package.json'),
        this.destinationPath('/package.json')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-beginner/server.js'),
        this.destinationPath('/server.js')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-beginner/.gitignore'),
        this.destinationPath('/.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
