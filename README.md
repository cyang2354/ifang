# Waijuyi Web Application #

>This is the web application project for Waijuyi website. It depends on the Rest services provided in WaijuyiService project and the MongoDB database backed by HomeDataClient project.

## Usage ##

Install Nodejs: 

* On Mac OSX: `brew update && brew install node`
* On Windows: Simply download the Windows Installer directly from the nodejs.org web site.

Install MongoDB:

* On Mac OSX: `brew install mongodb`
* on Windows/Linux: refer to http://docs.mongodb.org/manual/installation/

Ensure your npm packages up to date: if on Mac or Linux, do `npm install -g npm@latest`; if on Windows, do `npm update npm -g`; . If npm gets confused, do `npm cache clean`. 

For more help on npm: https://github.com/npm/npm/wiki/Troubleshooting#if-your-npm-is-broken

Install grunt and bower: `npm install -g grunt-cli bower`

Under the root folder of Waijuyi repository, install npm local npm modules: `npm install`

Under the root folder of Waijuyi repository, install npm bower components: `bower install`

Note for **Windows** users

* In this step, if you have error "spawn ENOENT" in installing `yo`, making sure 'C:\Windows\System32\' is in your path. 
* Do `npm install grunt-wiredep` to avoid some dependency missing issues.

Under the root folder of Waijuyi repository, run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

For more details on usage, see https://github.com/DaftMonk/generator-angular-fullstack

We recommend **Markdown** for editing READMEs, comments, Wiki and even for Slack chatting. See 
https://bitbucket.org/tutorials/markdowndemo.

tl;dr: http://assemble.io/docs/Cheatsheet-Markdown.html

Tutorials on our toys:

* Angular(http://www.w3schools.com/angular/, https://angularjs.org/)
* Bootstrap(http://www.w3schools.com/bootstrap/)
* UI Bootstrap(http://angular-ui.github.io/bootstrap/)
* [Node, Grunt, Bower and Yeoman - A Modern web dev's Toolkit](http://juristr.com/blog/2014/08/node-grunt-yeoman-bower/)
* [AngularJS Tutorial for Beginners With NodeJS ExpressJS and MongoDB](http://adrianmejia.com/blog/2014/09/28/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/)
* [AngularJS Tutorial: Learn to Build Modern Web Apps with MEAN](https://thinkster.io/angulartutorial/mean-stack-tutorial/)
* [Introduction to Angular.js in 50 Examples](https://www.youtube.com/watch?v=TRrL5j3MIvo)
* More documentation and tutorials at https://angularjs.org/. This is especially helpful: https://docs.angularjs.org/guide.

Recommended tools for development: Chrome dev tools, Sublime Text 3.

Deployment notes:

1. Log into vps1 as user `app` with same password as root.
2. Run `screen -a`.
3. Currently there are two active screens. Use  `Ctrl + A + N` to switch between windows. In one window, stop the running app.
4. Build app: `cd ~/waijuyi`, then `grunt`.
5. Start app: `cd /dist`, then `sudo -E node server/app.js`.