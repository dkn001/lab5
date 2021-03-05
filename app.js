
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var add = require('./routes/add');
var login = require('./routes/login');
var logout = require('./routes/logout');
var remove = require('./routes/remove');

//lab6
var project = require('./routes/project');

//A5
var dateview = require('./routes/dateview');

//additional routes
var trash = require('./routes/trash');
var restore = require('./routes/restore');
var permadelete = require('./routes/permadelete');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/add', add.addNote);
app.get('/date/:thedate/add', add.addNote);


//from lab6
app.get('/project/:id', project.projectInfo);

//Routes to different pages
app.get('/date/:thedate', dateview.view);
app.get('/login', login.addLogin);
app.get('/logout', logout.removeLogin);
app.get('/trash', trash.view);
app.get('/permadelete/:notename', permadelete.permaDelete);
app.get('/restore/:notename', restore.restoreTask);

// delete the right note
app.get('/date/:thedate/delete/:notename', remove.removeTask);
app.get('/delete/:notename', remove.removeTask);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var hbs = handlebars.create({});

hbs.handlebars.registerHelper("last", function(array) {
  return array[array.length-1];
});

hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

hbs.handlebars.registerHelper('lookupProp', function (obj, key, prop) {
   return obj[key] && obj[key][prop];
});