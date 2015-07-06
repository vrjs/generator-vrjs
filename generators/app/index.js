var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
      }, 
      {
        type : "confirm", 
        name : "three_textures", 
        message : "Do you want to include standard textures (from http://threejs.org/)?", 
        default : true
      }, 
      {
        type : "confirm", 
        name : "three_utils", 
        message : "Do you want to include standard threejs utilities (from http://threejs.org/)?", 
        default : true
      }


    ], function (answers) {
      this.appname = answers.name;
      this.three_textures = answers.three_textures;
      this.three_utils = answers.three_utils;
      done();
    }.bind(this));
  }, 
  writing: function () {
    var opts = { title : this.appname }
  	this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('index.js'),
      opts
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      opts
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      opts
    );
    if (this.three_textures) this.directory("three/textures", "three/textures");
    if (this.three_utils) this.directory("three/js", "three/js");
  }, 
  post_scaffold_message: function() {
  	console.log('vrjs application created at ' + this.destinationPath(this.appname));
    this.npmInstall()
  	this.config.save();
  }
});