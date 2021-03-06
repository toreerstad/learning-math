'use strict';

let express = require('express');
let app = express();
let port = 3000;

app.set('port', port);

let handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home', { indexes: [1,2,3,4,5,6,7,8,9,10]});
});

app.use((req, res) => {
  res.status(404);
  res.render('404');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(port, () => {
  console.log('App started on http://localhost:' + port + '; press Ctrl-C to terminate');
});
