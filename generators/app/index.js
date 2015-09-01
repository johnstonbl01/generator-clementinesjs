'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('/clementinejs/app'),
        this.destinationPath('/app')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/public'),
        this.destinationPath('/public')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/LICENSE.md'),
        this.destinationPath('/LICENSE.md')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/bower.json'),
        this.destinationPath('/bower.json')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/package.json'),
        this.destinationPath('/package.json')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/gulpfile.js'),
        this.destinationPath('/gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/server.js'),
        this.destinationPath('/server.js')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/.bowerrc'),
        this.destinationPath('/.bowerrc')
      );
      this.fs.copy(
        this.templatePath('/clementinejs/.gitignore'),
        this.destinationPath('/.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
