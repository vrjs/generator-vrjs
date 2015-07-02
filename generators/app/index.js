var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.appname = answers.name;
      done();
    }.bind(this));
  },
  setup_view: function () {
    console.log('view setup just ran');
  },
  setup_trackers: function () {
    console.log('trackr setup just ran');
  }, 
  writing: function () {
  	this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(this.appname + '/index.js'),
      {  }git
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(this.appname + '/index.html'),
      {  }
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(this.appname + '/package.json'),
      {  }
    );
  }, 
  post_scaffold_message: function() {
  	console.log('vrjs application created at ' + this.destinationPath(this.appname));
  	console.log("'cd " + this.appname + "'' and then 'electron .' to start");
  	console.log("  ... remember, you need electron installed already!")
  	console.log("      sudo npm install electron-prebuilt -g")
  }
});