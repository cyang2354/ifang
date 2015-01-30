# ifang Web Application #

>This is the web application project for Waijuyi website. It depends on the Rest services provided in WaijuyiService project and the MongoDB database backed by HomeDataClient project.

## Usage ##

Install Nodejs: 

* On Mac OSX: `brew update && brew install node`
* On Windows: Simply download the Windows Installer directly from the nodejs.org web site.

Install MongoDB:

* On Mac OSX: `brew install mongodb`
* on Windows/Linux: refer to http://docs.mongodb.org/manual/installation/

Ensure your npm packages up to date: if on Mac or Linux, do `npm install -g npm@latest`; if on Windows, do `npm update npm -g`; . If npm gets confused, do `npm cache clean`. 

Install grunt and bower: `npm install -g grunt-cli bower`

Under the root folder of Waijuyi repository, install npm local npm modules: `npm install`

Under the root folder of Waijuyi repository, install npm bower components: `bower install`

Under the root folder of Waijuyi repository, run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

For more details on usage, see https://github.com/DaftMonk/generator-angular-fullstack


Deployment notes:

1. Log into vps1 as user `app` with same password as root.
2. Run `screen -a`.
3. Currently there are two active screens. Use  `Ctrl + A + N` to switch between windows. In one window, stop the running app.
4. Build app: `cd ~/waijuyi`, then `grunt`.
5. Start app: `cd /dist`, then `sudo -E node server/app.js`.
