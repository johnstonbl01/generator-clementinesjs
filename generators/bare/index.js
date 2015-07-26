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
        this.templatePath('bower.json'),
        this.destinationPath('/bower.json')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('/gulpfile.js')
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
        this.templatePath('.bowerrc'),
        this.destinationPath('/.bowerrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
