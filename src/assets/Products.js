// all images imported from images directory
import product_01_image_01 from './images/product_01.jpg';
import product_01_image_02 from './images/product_01.1.jpg';
import product_01_image_03 from './images/product_01.3.jpg';

import product_02_image_01 from './images/product_2.1.jpg';
import product_02_image_02 from './images/product_2.2.jpg';
import product_02_image_03 from './images/product_2.3.jpg';

import product_03_image_01 from './images/product_3.1.jpg';
import product_03_image_02 from './images/product_3.2.jpg';
import product_03_image_03 from './images/product_3.3.jpg';

import product_04_image_01 from './images/product_4.1.jpg';
import product_04_image_02 from './images/product_4.2.jpg';
import product_04_image_03 from './images/product_4.3.png';

import product_05_image_01 from './images/product_04.jpg';
import product_05_image_02 from './images/product_08.jpg';
import product_05_image_03 from './images/product_09.jpg';

import product_06_image_01 from './images/bread(1).png';
import product_06_image_02 from './images/bread(2).png';
import product_06_image_03 from './images/bread(3).png';

const Products = [
  {
    id: '01',
    title: 'Chicken Burger',
    price: 8.99,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

    desc: 'Our Chicken Burger is a delightful blend of tender, juicy chicken breast seasoned to perfection and grilled to achieve a mouthwatering, smoky flavor. Served on a freshly baked, soft bun, this burger is topped with crisp lettuce, ripe tomatoes, and crunchy pickles, all drizzled with our signature creamy mayo. A perfect balance of textures and flavors, each bite offers a satisfying crunch followed by the savory, juicy goodness of the grilled chicken. Ideal for a hearty lunch or a delicious dinner, our Chicken Burger is sure to become a favorite for burger enthusiasts and chicken lovers alike. ',
  },

  {
    id: '02',
    title: 'Vegetarian Pizza',
    price: 11.49,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'Indulge in our Vegetarian Pizza, a vibrant and delicious feast for the senses. Our pizza features a perfectly baked, golden crust topped with a rich and savory tomato sauce. Generously adorned with a medley of fresh, colorful vegetables, including bell peppers, onions, mushrooms, olives, and tomatoes, each bite offers a burst of flavor and a delightful crunch. Finished with a generous sprinkle of mozzarella and a hint of oregano, this pizza is a treat for both vegetarians and veggie lovers. Enjoy the wholesome goodness and satisfying taste of our Vegetarian Pizza, perfect for any meal.',
  },

  {
    id: '03',
    title: 'Double Cheese Margherita',
    price: 7.99,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'Experience the ultimate cheese lover’s delight with our Double Cheese Margherita pizza. This timeless classic features a hand-tossed, perfectly baked crust that is both crisp and chewy. Smothered in a rich, tangy tomato sauce and topped with not one, but two layers of the finest mozzarella cheese, each bite delivers a gooey, cheesy bliss. Garnished with fresh basil leaves and a drizzle of extra virgin olive oil, our Double Cheese Margherita is a celebration of simplicity and flavor. Perfect for any occasion, this pizza promises to satisfy your cheese cravings and leave you wanting more.',
  },

  {
    id: '04',
    title: 'Mexican Green Wave',
    price: 4.49,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'Dive into the vibrant and zesty flavors of our Mexican Green Wave pizza. This exciting creation features a crisp, hand-tossed crust as its foundation, layered with a tangy salsa sauce that brings a touch of heat and authentic Mexican taste. Topped with a colorful array of fresh green bell peppers, juicy tomatoes, and crunchy onions, this pizza is further enhanced by a generous sprinkle of sweet corn and spicy jalapeños. A blend of mozzarella and cheddar cheese melts perfectly over the toppings, adding a rich and creamy texture to each bite. Finished with a dash of Mexican herbs and spices, the Mexican Green Wave is a delightful fusion of freshness and zest, perfect for those who love a bit of spice in their life.',
  },

  {
    id: '05',
    title: 'Cheese Burger',
    price: 2.99,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'Indulge in our timeless Cheese Burger, a beloved favorite that never goes out of style. Our burger features a juicy, flame-grilled beef patty cooked to perfection, nestled between soft, toasted sesame seed buns. Generously topped with melted cheddar cheese that oozes with every bite, this burger promises a burst of savory goodness. Accompanied by crisp lettuce, ripe tomato slices, and tangy pickles, each layer adds freshness and texture to the ensemble. Finished with a dollop of creamy mayo and tangy ketchup, our Cheese Burger is a perfect blend of flavors and textures that satisfies every craving.',
  },
  {
    id: '06',
    title: 'Royal Cheese Burger',
    price: 9.49,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

    desc: 'Treat yourself to our luxurious Royal Cheese Burger, fit for kings and queens. This burger masterpiece starts with a premium, handcrafted beef patty, flame-grilled to perfection for a mouthwatering smoky flavor. Nestled between soft, golden brioche buns, the patty is crowned with a generous layer of rich, melted aged cheddar cheese that cascades over the edges, ensuring each bite is decadently cheesy. Accompanied by crisp lettuce, juicy tomato slices, and tangy pickles, this burger is elevated with a hint of caramelized onions and a drizzle of our signature secret sauce. Indulge in the ultimate burger experience with the Royal Cheese Burger, where every ingredient is crafted to perfection.',
  },

  {
    id: '07',
    title: 'Seafood Pizza',
    price: 14.99,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'Dive into the flavors of the sea with our delightful Seafood Pizza. This culinary masterpiece features a thin, crispy crust topped with a savory tomato sauce infused with herbs and garlic. Adorned with an exquisite medley of tender seafood treasures, including succulent shrimp, tender calamari rings, and flavorful pieces of fresh fish, each slice offers a delightful burst of oceanic flavors. Enhanced with a sprinkle of tangy Parmesan cheese and finished with a garnish of fresh parsley, our Seafood Pizza is a perfect choice for seafood enthusiasts and pizza lovers alike.',
  },

  {
    id: '08',
    title: 'Thin Cheese Pizza',
    price: 16.49,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'Our Thin Cheese Pizza is a celebration of simplicity and flavor. Featuring a delicate, crispy crust that serves as the perfect canvas, this pizza is generously topped with a blend of creamy mozzarella and tangy Parmesan cheeses. Each slice offers a delightful crunch and a rich, gooey cheese experience that melts in your mouth with every bite. Whether enjoyed solo or customized with your favorite toppings, our Thin Cheese Pizza promises to satisfy your craving for a classic and delicious pizza experience.',
  },

  {
    id: '09',
    title: 'Pizza With Mushroom',
    price: 11.99,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'Indulge in our Pizza with Mushroom, a perfect blend of rich flavors and delightful textures. This pizza features a thin, crispy crust, topped with a savory tomato sauce and a generous layer of melted mozzarella cheese. Scattered across the top are fresh, sautéed mushrooms, adding an earthy depth and umami richness to every bite. Enhanced with a sprinkle of aromatic herbs and a drizzle of extra virgin olive oil, our Pizza with Mushroom is a simple yet elegant choice for mushroom lovers and pizza enthusiasts alike.',
  },

  {
    id: '10',
    title: 'Classic Hamburger',
    price: 19.99,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'Experience the simplicity and deliciousness of our Classic Hamburger. This iconic burger features a juicy, perfectly seasoned beef patty, grilled to perfection and served on a soft, toasted bun. Topped with crisp lettuce, fresh tomato slices, and tangy pickles, each bite is a delightful combination of flavors and textures. Finished with a dollop of creamy mayo and a splash of tangy ketchup, our Classic Hamburger is a true testament to the timeless appeal of a well-made burger. Perfect for any occasion, this burger is sure to satisfy your cravings.',
  },

  {
    id: '11',
    title: 'Crunchy Bread ',
    price: 2.59,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'Savor the delightful crunch of our Crunchy Bread, a true treat for bread enthusiasts. Baked to golden perfection, this bread features a crispy, crunchy crust that gives way to a soft, airy interior with each bite. Made with the finest ingredients and a touch of artisan craftsmanship, our Crunchy Bread is perfect for sandwiches, dipping in soups, or enjoying on its own. Whether toasted or fresh out of the oven, this bread promises a delicious experience that pairs wonderfully with any meal.',
  },

  {
    id: '12',
    title: 'Delicious Bread ',
    price: 4.89,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'Indulge in our Delicious Bread, where each loaf is a masterpiece of flavor and texture. Baked to golden perfection, our bread boasts a crispy crust that encases a soft, fluffy interior. Made with the finest ingredients and a touch of artisan craftsmanship, every bite delivers a harmonious blend of taste and satisfaction. Whether enjoyed as a base for your favorite sandwiches, toasted with a spread of butter, or simply savored on its own, our Delicious Bread is the perfect complement to any meal. Experience the warmth and comfort of freshly baked bread, made to delight your senses.',
  },

  {
    id: '13',
    title: 'Loaf Bread',
    price: 17.99,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'Discover the timeless appeal of our classic Loaf Bread, a staple for any kitchen. This perfectly baked loaf features a golden, crispy crust and a soft, fluffy interior that melts in your mouth. Made with the finest ingredients, our loaf bread offers a subtle, wholesome flavor that complements any dish. Whether you\'re making sandwiches, toasting slices for breakfast, or serving it alongside your favorite soups and salads, our Loaf Bread is a versatile and delicious choice. Enjoy the comforting taste and satisfying texture of freshly baked bread, ideal for any occasion.',
  },
];

export default Products;
