const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Mom' },
    { name: 'Dad' },
    { name: 'That Special Someone' },
    { name: 'Friends' },
    { name: 'Fur Babies' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Earrings',
      description:
        'Get mom a nice pair of earrings this holiday season.',
      image: 'earrings.png',
      category: categories[0]._id,
      price: 25.99,
      quantity: 25
    },
    {
      name: 'Coffee Mug',
      description:
        'Have a Meowy Christmas with this coffee mug perfect for any animal lover!',
      image: 'coffee.png',
      category: categories[3]._id,
      price: 14.99,
      quantity: 50
    },
    {
      name: 'Festive Dog Collar',
      category: categories[4]._id,
      description:
        'Even Fido can get in on the Holiday Festivities with this one of a kind collar that will be sure to turn some heads and wag some tails!',
      image: 'collar.png',
      price: 10.99,
      quantity: 15
    },
    {
      name: 'Sweater',
      category: categories[1]._id,
      description:
        'A punny Christmas sweater for Dad',
      image: 'sweater.png',
      price: 23.99,
      quantity: 40
    },
    {
      name: 'Tree Necklace',
      category: categories[0]._id,
      description:
        'Mom will love wearing this Christmas Tree Necklace',
      image: 'necklace.png',
      price: 19.99,
      quantity: 25
    },
    {
      name: 'Camera',
      category: categories[1]._id,
      description:
        'A perfect tech gift for dad!',
      image: 'camera.jpg',
      price: 299.99,
      quantity: 10
    },
    {
      name: "Woman's Top",
      category: categories[2]._id,
      description:
        'The perfect gift... for that special someone.',
      image: 'Special.png',
      price: 39.99,
      quantity: 10
    },
    {
      name: 'Gingerbread House Kit',
      category: categories[3]._id,
      description:
        'Build a gingerbread house with your friend!',
      image: 'gingerbread.png',
      price: 12.99,
      quantity: 60
    },
    {
      name: 'Christmas Cat Toys',
      category: categories[4]._id,
      description: 'Your cat will love getting in the Holiday spirit with this set of Christmas themed toys!',
      image: 'cat.png',
      price: 4.99,
      quantity: 100
    },
    {
      name: 'Water Bowl',
      category: categories[4]._id,
      description:
        'A holiday themed water bowl for your furry friends',
      image: 'bowl.png',
      price: 9.99,
      quantity: 75
    },
    {
      name: 'Teddy Bear',
      category: categories[2]._id,
      description:
        'Show your significant other how much they mean to you by giving them this adorable teddy bear that they are sure to love!',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Engagement Ring',
      category: categories[2]._id,
      description:
        'Really Wow her on Christmas morning with the most elite gift we have to offer. This engagement ring is made of 18 carat gold with 6 and 10 carat diamonds.',
      image: 'ring.png',
      price: 92899.99,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Andrew',
    lastName: 'Smith',
    email: 'andrew@testmail.com',
    password: 'password123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Ben',
    lastName: 'Boyte',
    email: 'ben@testmail.com',
    password: 'password123'
  });

  await User.create({
    firstName: 'Corinne',
    lastName: 'Mestemacher',
    email: 'corinne@testmail.com',
    password: 'password123'
  });

  console.log('users seeded');

  process.exit();
});
