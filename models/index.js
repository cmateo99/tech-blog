const User = require('./User');
const bPost = require('./Post');
const Comment = require('./comment');


User.hasMany(bPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

bPost.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

bPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
});


Comment.belongsTo(bPost, {
    foreignKey: 'blogpost_id',
});

module.exports = { User, BlogPost, Comment };