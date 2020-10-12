const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUsers = await User.insertMany(users);

        const adminUser = createUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser};
        });

        await Product.insertMany(sampleProducts);
        console.log('Data imported'.green.inverse);
        process.exit();

    } catch (e) {
        console.error(`${e}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();


        console.log('Data destroyed'.red.inverse);
        process.exit();

    } catch (e) {
        console.error(`${e}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}