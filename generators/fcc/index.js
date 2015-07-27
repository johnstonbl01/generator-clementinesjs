'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('/app'),
        this.destinationPath('/app')
      );
      this.fs.copy(
        this.templatePath('/public'),
        this.destinationPath('/public')
      );
      this.fs.copy(
        this.templatePath('LICENSE.md'),
        this.destinationPath('/LICENSE.md')
      );
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('/package.json')
      );
      this.fs.copy(
        this.templatePath('server.js'),
        this.destinationPath('/server.js')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
