'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('/clementinejs-bare/app'),
        this.destinationPath('/app')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/public'),
        this.destinationPath('/public')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/LICENSE.md'),
        this.destinationPath('/LICENSE.md')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/bower.json'),
        this.destinationPath('/bower.json')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/package.json'),
        this.destinationPath('/package.json')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/gulpfile.js'),
        this.destinationPath('/gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/server.js'),
        this.destinationPath('/server.js')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/.bowerrc'),
        this.destinationPath('/.bowerrc')
      );
      this.fs.copy(
        this.templatePath('/clementinejs-bare/.gitignore'),
        this.destinationPath('/.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
