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
        this.templatePath('README.md'),
        this.destinationPath('/README.md')
      );
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('/package.json')
      );
      this.fs.copy(
        this.templatePath('server.js'),
        this.destinationPath('/server.js')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
