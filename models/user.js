var db = require('./database');
var Sequelize = require('sequelize');


class User extends Sequelize.Model {}
User.init({
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    salt: {type: Sequelize.STRING}
  
})

User.addHook('beforeCreate',(user)=>{
    user.salt = crypto.randomBytes(20).toString('hex');
    
})

User.prototype.hashpassword = function(){
    return crypto.createHmac('sha1', salt).update(password).digest('hex')
}



module.export = User;


//{ sequelize: db, modelName: 'user' })

//User.belongsTo(User, {as: 'parent'});