definition = {
  first_name: {type: 'STRING'},
  last_name: {type: 'STRING'},
  id: {
    type: 'INTEGER',
    autoIncrement: true,
    defaultsTo: 'AUTO_INCREMENT',
    primaryKey: true
  }
}

exports.up = function(adapter, done) {
  adapter.define('one_migration', definition, done);
};

exports.down = function(adapter, done) { 
  adapter.drop('one_migration', done);
};
