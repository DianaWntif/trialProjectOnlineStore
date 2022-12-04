const { DataTypes } = require('sequelize')
const  sequelize = require('../db')

const User = sequelize.define('user', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:       { type: DataTypes.STRING, allowNull: false },
    dadname:    { type: DataTypes.STRING, allowNull: false },
    surname:    { type: DataTypes.STRING, allowNull: false },
    mail:       { type: DataTypes.STRING, unique: true, allowNull: false },
    password:   { type: DataTypes.STRING, unique: true, allowNull: false },
    phone:      { type: DataTypes.STRING, unique: true, allowNull: false },
    access:     { type: DataTypes.STRING, defaultValue: "User" }
})

const Criterions = sequelize.define('criterions', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:       { type: DataTypes.STRING, allowNull: false },
    options:    { type: DataTypes.STRING }
})

const TypeProduct = sequelize.define('type_product', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:       { type: DataTypes.STRING, allowNull: false }
})

const Category = sequelize.define('category', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:       { type: DataTypes.STRING, allowNull: false }
})

const SubCategory = sequelize.define('subcategory', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:       { type: DataTypes.STRING, allowNull: false }
})

const GroupCriterions = sequelize.define('group_crit', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:       { type: DataTypes.STRING, allowNull: false }
})

const Product = sequelize.define('product', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:       { type: DataTypes.STRING , allowNull: false, unique: true },
    img:        { type: DataTypes.STRING, allowNull: false }
})

const ProductInfo = sequelize.define('info_product', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description:{ type: DataTypes.STRING , allowNull: false },
    title:      { type: DataTypes.STRING , allowNull: false },
})

const Order = sequelize.define('order', {
    id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city:        { type: DataTypes.STRING, allowNull: false },
    street:      { type: DataTypes.STRING, allowNull: false },
    numHome:     { type: DataTypes.STRING, allowNull: false },
    housing:     { type: DataTypes.STRING, allowNull: false },
    numEntrance: { type: DataTypes.STRING, allowNull: false },
    numApartment:{ type: DataTypes.STRING, allowNull: false },
    status:      { type: DataTypes.STRING, allowNull: false }
})

const ListProduct = sequelize.define('list_product', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Basket = sequelize.define('basket', {
    id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(ListProduct)
ListProduct.belongsTo(Basket)//в листе внешний ключ баскета

Product.hasMany(ListProduct)
ListProduct.belongsTo(Product)//в листе внешний ключ продукта

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(ProductInfo)

TypeProduct.hasMany(Product)
Product.belongsTo(TypeProduct)

TypeProduct.hasMany(GroupCriterions)
GroupCriterions.belongsTo(TypeProduct)

Criterions.hasMany(GroupCriterions)
GroupCriterions.belongsTo(Criterions)

Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)

SubCategory.hasMany(TypeProduct)
TypeProduct.belongsTo(SubCategory)

module.exports = {
    User,
    GroupCriterions,
    TypeProduct,
    ProductInfo,
    Product,
    ListProduct,
    Basket,
    Order,
    Category,
    SubCategory
}


