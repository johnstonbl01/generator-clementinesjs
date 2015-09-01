'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('/clementinejs-fcc/app'),
        this.destinationPath('/app')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-fcc/public'),
        this.destinationPath('/public')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-fcc/LICENSE.md'),
        this.destinationPath('/LICENSE.md')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-fcc/package.json'),
        this.destinationPath('/package.json')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-fcc/server.js'),
        this.destinationPath('/server.js')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-fcc/.npmignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
