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
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
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
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
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
