const { app } = require('./app');

const { database } = require('./utils/database.util')

database.authenticate()
    .then(console.log('database authenticated!!'))
    .catch(err => console.log(err));

const server = app.listen(1234, () =>{
    console.log('server is running')
});