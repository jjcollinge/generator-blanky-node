'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Ahoy there! welcome to ' + chalk.red('blanky') + ' generator!'
            ));

        var prompts = [
            {
                type: 'input',
                name: 'platformType',
                message: 'What type of application would you like to generator?',
                default: "node"
            },
            {
                type: 'input',
                name: 'pkgName',
                message: 'What is your app name?',
                default: "blanky-service"
            },
            {
                type: 'input',
                name: 'pkgVer',
                message: 'What is your app version?',
                default: "1.0.0"
            }];

        this.prompt(prompts, function (props) {
            this.props = props;
            done();
        }.bind(this));
    },

    copying: function () {
        var pkgName = this.props.pkgName;
        var pkgVer = this.props.pkgVer;

        console.log("application name: " + pkgName);
        console.log("application version: " + pkgVer);
    },

    install: function () {
        this.installDependencies();
    }
});
