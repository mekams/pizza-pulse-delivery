# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



<h1>Readme: Pizza Pulse Deliver</h1>

 Please follow the details mentioned below to run the project build using React:
1.	Download and install node JS and Visual Studio code editor to your computer  (Link: https://nodejs.org/en  and https://code.visualstudio.com/download )
2.	Open the " pizza-pulse-delivery " folder in the Visual Studio code editor.  In the Visual Studio editor, the terminal path must be the " pizza-pulse-delivery " folder and please type:
	npm install --------------------------- (all dependencies to this project will be installed with the help of a file named "package. Json"
	npm start ------------------- (To start the project and view it.)

## Deployed to Vercel----------------------------https://pizza-pulse-delivery.vercel.app/
## My GitHub Repo link--------------------------https://github.com/mekams/pizza-pulse-delivery
##Dependencies: The website has various dependencies such as below:
	**@reduxjs/toolkit**: State management library for Redux.
	**@testing-library/jest-dom**: Custom jest matchers to test the state of the DOM.
	**@testing-library/react**: React bindings for the Testing Library.
	**@testing-library/user-event**: Simulates user events for testing.
	**bootstrap**: Front-end framework for responsive design and components.
	**react**: Core library for building user interfaces.
	**react-dom**: DOM-specific methods for React.
	**react-paginate**: React component for pagination.
	**react-redux**: Official React bindings for Redux.
	**react-responsive-carousel**: React component for creating responsive carousels.
	**react-router-dom**: Declarative routing for React web applications.
	**react-scripts**: Scripts and configuration for Create React App.
	**react-slick**: Carousel component built with React.
	**reactstrap**: Bootstrap components built with React.
	**remixicon**: Icon library.
	**slick-carousel**: Carousel/slider component.
	**web-vitals**: Measures web performance vitals.

##Introduction
Pizza Pulse Deliver is an online platform where a client can order pizza, burgers or bread and place the order which will be delivered to your doorstep in minutes.
	Completely responsive Design and clean User Interface.
	Loader before the website loads.
	Login to the existing and register a new user. (Functionality coming soon while doing backend project)
	Hero section included (images Carousel).
	Pagination to move to the next page.
	Sorting and searching added to search a particular product.
	Home, Food, Cart, Contact, and About Us pages are present
	Product individual page is also added.

##Folder Structure
└── 📁src
    └── App.jsx
    └── 📁assets
        └── 📁images
            └── ava-1.jpg
            └── ava-2.jpg
            └── ava-3.jpg
            └── ava-4.jpg
            └── banner.jpg
            └── banner1.jpg
            └── banner2.jpg
            └── banner3.jpg
            └── bread(1).png
            └── bread(2).png
            └── bread(3).png
            └── bread.png
            └── category-01.png
            └── category-02.png
        └── Products.js
    └── 📁components
        └── Footer.jsx
        └── Header.jsx
        └── Helmet.jsx
        └── Layout.jsx
        └── Loader.jsx
        └── 📁pages
            └── AboutUs.jsx
            └── AllFoods.jsx
            └── Cart.jsx
            └── Checkout.jsx
            └── Contact.jsx
            └── FoodDetails.jsx
            └── Home.jsx
            └── Login.jsx
            └── Register.jsx
        └── 📁UI
            └── CartItem.jsx
            └── Category.jsx
            └── Common.jsx
            └── ProductCard.jsx
            └── ShopCart.jsx
            └── TestimonialSlider.jsx
    └── index.css
    └── index.js
    └── netlify.toml
    └── 📁routes
        └── Router.jsx
    └── 📁store
        └── 📁shop-cart
            └── CartSlice.jsx
            └── CartUiSlice.jsx
        └── store.jsx
    └── 📁styles
        └── allfoods.css
        └── cart.css
        └── cartitem.css
        └── category.css
        └── checkout.css
        └── common.css
        └── fooddetails.css
        └── footer.css
        └── header.css
        └── home.css
        └── homeherosection.css
        └── loader.css
        └── paginationallfoods.css
        └── productcard.css
        └── shopcart.css
        └── testimonialslider.css

##Screenshots
 
Figure 1 Home Page-1

 
Figure 2 Home Page-2

 
Figure 3 Foods Page

 
Figure 4 Product Page

 
Figure 5 Side Cart

 
Figure 6 Cart Page

 
Figure 7 Checkout Page

 
Figure 8 Contact Us Page

 
Figure 9 About Us page

 
Figure 10 Login Page

 
Figure 11 Registration Page

