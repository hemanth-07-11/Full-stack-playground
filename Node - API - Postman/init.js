var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';
var dbCollections = {}; 

var initPromise = MongoClient.connect(url).then(function(db){
	dbCollections.productsCol = db.collection('products');
	dbCollections.usersCol = db.collection('users');
	return dbCollections.usersCol.update({name: 'testUser'}, {name: 'hems', password: 'hems123'}, {upsert: true});
},function(error){
	console.log('Error while connecting to database: ', error);
});

exports.initPromise = initPromise;

exports.dbCollections = dbCollections;