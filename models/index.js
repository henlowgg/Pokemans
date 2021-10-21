const User = require('./User');
const Collection = require('./Collection');

User.hasMany(Collection, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Collection.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Collection };
