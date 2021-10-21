const User = require('./User');
const Collection = require('./Collection');
const Card = require('./Card')

User.hasMany(Collection, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Collection.belongsTo(User, {
  foreignKey: 'user_id'
});

Collection.hasMany(Card, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Card.belongsTo(Collection, {
    foreignKey: 'collection_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Collection };
