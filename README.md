# <h1>Readme: Pizza Pulse Deliver</h1>

## `Please follow the details mentioned below to run the project build using React:`
- Download and install node JS and Visual Studio code editor to your computer  (Link: https://nodejs.org/en  and https://code.visualstudio.com/download )
- Open the " pizza-pulse-delivery " folder in the Visual Studio code editor. In the Visual Studio editor, the terminal path must be the " pizza-pulse-delivery " folder and please type:
  
### `npm install` 
All dependencies to this project will be installed with the help of a file named "package. Json"
### `npm start`
To start the project and view it.

## `Deployed to Vercel`
https://pizza-pulse-delivery.vercel.app/
## `My GitHub Repo link`
https://github.com/mekams/pizza-pulse-delivery

### `Dependencies: The website has various dependencies such as below:`
- **@reduxjs/toolkit**: State management library for Redux.
- **@testing-library/jest-dom**: Custom jest matchers to test the state of the DOM.
- **@testing-library/react**: React bindings for the Testing Library.
- **@testing-library/user-event**: Simulates user events for testing.
- **bootstrap**: Front-end framework for responsive design and components.
- **react**: Core library for building user interfaces.
- **react-dom**: DOM-specific methods for React.
- **react-paginate**: React component for pagination.
- **react-redux**: Official React bindings for Redux.
- **react-responsive-carousel**: React component for creating responsive carousels.
- **react-router-dom**: Declarative routing for React web applications.
- **react-scripts**: Scripts and configuration for Create React App.
- **react-slick**: Carousel component built with React.
- **reactstrap**: Bootstrap components built with React.
- **remixicon**: Icon library.
- **slick-carousel**: Carousel/slider component.
- **web-vitals**: Measures web performance vitals.

## `Introduction`
**Pizza Pulse Deliver is an online platform where a client can order pizza, burgers or bread and place the order which will be delivered to your doorstep in minutes.**
- Completely responsive Design and clean User Interface.
- Loader before the website loads.
-	Login to the existing and register a new user. (Functionality coming soon while doing backend project)
-	Hero section included (images Carousel).
-	Pagination to move to the next page.
-	Sorting and searching added to search a particular product.
-	Home, Food, Cart, Contact, and About Us pages are present
-	Product individual page is also added.

### `Folder Structure`

    ** Pizza_Pulse_Deliver **
  ```pizza-pulse-delivery
  ├─]node_modules/ (ignored)
  ├─ public/
  │  ├─ apple-touch-icon.png
  │  ├─ favicon.ico
  │  ├─ index.html
  │  ├─ logo192.png
  │  ├─ logo512.png
  │  ├─ manifest.json
  │  └─ robots.txt
  ├─ src/
  │  ├─ assets/
  │  │  ├─ images/
  │  │  │  ├─ ava-1.jpg
  │  │  │  ├─ ava-2.jpg
  │  │  │  ├─ ava-3.jpg
  │  │  │  ├─ ava-4.jpg
  │  │  │  ├─ banner.jpg
  │  │  │  ├─ banner1.jpg
  │  │  │  ├─ banner2.jpg
  │  │  │  ├─ banner3.jpg
  │  │  │  ├─ bread.png
  │  │  │  ├─ bread(1).png
  │  │  │  ├─ bread(2).png
  │  │  │  ├─ bread(3).png
  │  │  │  ├─ category-01.png
  │  │  │  ├─ category-02.png
  │  │  │  ├─ category-03.png
  │  │  │  ├─ category-04.png
  │  │  │  ├─ fried-potatoes.png
  │  │  │  ├─ hamburger.png
  │  │  │  ├─ hero.png
  │  │  │  ├─ hero1.png
  │  │  │  ├─ hero2.png
  │  │  │  ├─ hero3.png
  │  │  │  ├─ hero4.png
  │  │  │  ├─ hero5.png
  │  │  │  ├─ location.png
  │  │  │  ├─ location1.jpg
  │  │  │  ├─ network.png
  │  │  │  ├─ network1.png
  │  │  │  ├─ network4.png
  │  │  │  ├─ pizza.png
  │  │  │  ├─ product_01.1.jpg
  │  │  │  ├─ product_01.3.jpg
  │  │  │  ├─ product_01.jpg
  │  │  │  ├─ product_04.jpg
  │  │  │  ├─ product_08.jpg
  │  │  │  ├─ product_09.jpg
  │  │  │  ├─ product_2.1.jpg
  │  │  │  ├─ product_2.2.jpg
  │  │  │  ├─ product_2.3.jpg
  │  │  │  ├─ product_3.1.jpg
  │  │  │  ├─ product_3.2.jpg
  │  │  │  ├─ product_3.3.jpg
  │  │  │  ├─ product_4.1.jpg
  │  │  │  ├─ product_4.2.jpg
  │  │  │  ├─ product_4.3.png
  │  │  │  ├─ res-logo.png
  │  │  │  ├─ res-logo1.png
  │  │  │  ├─ service-01.png
  │  │  │  ├─ service-02.png
  │  │  │  └─ service-03.png
  │  │  ├─ screenshots/
  │  │  │  ├─ 1.png
  │  │  │  ├─ 2-1.png
  │  │  │  ├─ 2.png
  │  │  │  ├─ 3-1-1.png
  │  │  │  ├─ 3-1.png
  │  │  │  ├─ 3-2.png
  │  │  │  ├─ 3-3.png
  │  │  │  ├─ 3.png
  │  │  │  ├─ 6.png
  │  │  │  ├─ 7.png
  │  │  │  ├─ 8-1.png
  │  │  │  └─ 8-2.png
  │  │  └─ Products.js
  │  ├─ components/
  │  │  ├─ pages/
  │  │  │  ├─ AboutUs.jsx
  │  │  │  ├─ AllFoods.jsx
  │  │  │  ├─ Cart.jsx
  │  │  │  ├─ Checkout.jsx
  │  │  │  ├─ Contact.jsx
  │  │  │  ├─ FoodDetails.jsx
  │  │  │  ├─ Home.jsx
  │  │  │  ├─ Login.jsx
  │  │  │  └─ Register.jsx
  │  │  ├─ UI/
  │  │  │  ├─ CartItem.jsx
  │  │  │  ├─ Category.jsx
  │  │  │  ├─ Common.jsx
  │  │  │  ├─ ProductCard.jsx
  │  │  │  ├─ ShopCart.jsx
  │  │  │  └─ TestimonialSlider.jsx
  │  │  ├─ Footer.jsx
  │  │  ├─ Header.jsx
  │  │  ├─ Helmet.jsx
  │  │  ├─ Layout.jsx
  │  │  └─ Loader.jsx
  │  ├─ routes/
  │  │  └─ Router.jsx
  │  ├─ store/
  │  │  ├─ shop-cart/
  │  │  │  ├─ CartSlice.jsx
  │  │  │  └─ CartUiSlice.jsx
  │  │  └─ store.jsx
  │  ├─ styles/
  │  │  ├─ allfoods.css
  │  │  ├─ cart.css
  │  │  ├─ cartitem.css
  │  │  ├─ category.css
  │  │  ├─ checkout.css
  │  │  ├─ common.css
  │  │  ├─ fooddetails.css
  │  │  ├─ footer.css
  │  │  ├─ header.css
  │  │  ├─ home.css
  │  │  ├─ homeherosection.css
  │  │  ├─ loader.css
  │  │  ├─ paginationallfoods.css
  │  │  ├─ productcard.css
  │  │  ├─ shopcart.css
  │  │  └─ testimonialslider.css
  │  ├─ App.jsx
  │  ├─ index.css
  │  ├─ index.js
  │  └─ netlify.toml
  ├─ .gitignore
  ├─ package-lock.json
  ├─ package.json
  └─ README.md```


### `Screenshots`
 
- Home Page-1

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/1.png"> <br/>

- Home Page-2

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/2.png"> <br/>

- Home Page-3

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/2-1.png"> <br/>

- Foods Page

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/3.png"> <br/>
 
- Product Page

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/3-1.png"> <br/>
 
- Side Cart

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/3-1-1.png"> <br/>

- Cart Page

 <img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/3-2.png"> <br/>

- Checkout Page

 <img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/3-3.png"> <br/>

- Contact Us Page

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/6.png"> <br/>

- About Us page

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/7.png"> <br/>
 
- Login Page

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/8-1.png"> <br/>
 
- Registration Page

<img width="895" alt="image" src="https://github.com/mekams/pizza-pulse-delivery/blob/main/src/assets/screenshots/8-2.png"> <br/>

