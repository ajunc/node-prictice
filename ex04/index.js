const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {

    User = sequelize.define('user', {
      id: {type: Sequelize.INTEGER},
      name: Sequelize.STRING
    });
    // 暗号：  哈希算法
    Product = sequelize.define('product', {
      id: {type: Sequelize.INTEGER},
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
    Product.belongsTo(User, {
      constraints: true,
      onDelete: 'CASCADE'
    });
    User.hasMany(Product);
    await sequelize.sync(true)

  return { User, Product }
} 
