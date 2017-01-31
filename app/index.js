(function() {
    "use strict";

    var generators = require('yeoman-generator'),
        methods    = {};

    methods.main = function() {
        var done = this.async();
        this.prompt({
            type: "input",
            name: "directive",
            message: "Enter your sample-project name",
            default: this.appname
        }).then(function(answers){
            this.directiveName = answers.directive;
            this.destinationRoot('public/src/' + answers.directive);
            done();
        }.bind(this));
    };

    methods.copyFile = function() {
        this.fs.copyTpl( this.templatePath(), this.destinationPath(), this);
    };

    module.exports = generators.Base.extend( methods );

}());
