import React, { useState, useEffect } from 'react';
import Helmet from '../Helmet.jsx';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import heroImg3 from '../../assets/images/hero3.png';
import heroImg1 from '../../assets/images/hero1.png';
import heroImg2 from '../../assets/images/hero2.png';
import heroImg4 from '../../assets/images/hero4.png';
import heroImg5 from '../../assets/images/hero5.png';
import '../../styles/homeherosection.css';
import { Link } from 'react-router-dom';
import Category from '../UI/Category.jsx';
import '../../styles/home.css';
import featureImg01 from '../../assets/images/service-01.png';
import featureImg02 from '../../assets/images/service-02.png';
import featureImg03 from '../../assets/images/service-03.png';
import Products from '../../assets/Products.js';
import foodCategoryImg01 from '../../assets/images/hamburger.png';
import foodCategoryImg02 from '../../assets/images/pizza.png';
import foodCategoryImg03 from '../../assets/images/bread.png';
import ProductCard from '../UI/ProductCard.jsx';
import networkImg from '../../assets/images/network.png';
import TestimonialSlider from '../UI/TestimonialSlider.jsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: "Experience lightning-fast delivery with our service. Enjoy fresh, hot food at your doorstep in no time.",
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: "Indulge in a superior dine-in experience. Enjoy exquisite ambiance, exceptional service, and delectable dishes crafted to perfection.",
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: "Convenient pick-up options available. Order ahead and your food will be ready for you to collect with ease.",
  },
];

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(Products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = Products.filter((item) => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(Products);
    }
    if (category === 'BURGER') {
      const filteredProducts = Products.filter(
        (item) => item.category === 'Burger'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = Products.filter(
        (item) => item.category === 'Pizza'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = Products.filter(
        (item) => item.category === 'Bread'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>
                  Craving a delicious pizza delivered hot and fresh to your door? 
                </h5>
                <h1 className='mb-4 hero__title'>
                  <span>HUNGRY?</span> Why Wait?<br />Order Now at
                  <span> Pizza Pulse Delivery!</span>
                </h1>

                <p>
                  <b>Grab your order - Tap below :</b> 
                </p>

                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                  <button className='order__btn all__foods-btn'>
                    <Link to='/foods'>Order Now</Link>
                  </button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Free Delivery
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
            <div className='hero__img'>
                <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={2800} showThumbs={false}>
                  <div>
                    <img src={heroImg4} alt='hero-img-1' className='w-100' />
                  </div>
                  <div>
                    <img src={heroImg2} alt='hero-img-2' className='w-100' />
                  </div>
                  <div>
                    <img src={heroImg1} alt='hero-img-3' className='w-100' />
                  </div>
                  <div>
                    <img src={heroImg3} alt='hero-img-4' className='w-100' />
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'> Just sit back at home</h2>
              <h2 className='feature__title'>
                we will <span>take care</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>
                Enjoy our fast and reliable delivery service, bringing delicious, freshly prepared meals straight to your door. No hassle, no worries—just great food and convenience.
              </p>
              <p className='mb-1 mt-4 feature__text'>
                Plus, our easy online ordering system ensures a seamless experience every time.
              </p>
            </Col>

            {featureData.map((item, index) => {
              return (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                  <div className='feature__item text-center px-5 py-3'>
                    <img
                      className='w-25 mb-3'
                      src={item.imgUrl}
                      alt='feature-img'
                    />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-1'>
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn ${
                    category === 'ALL' ? 'foodBtnActive' : ''
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('BURGER')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BURGER' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodCategoryImg01} alt='' />
                  Burger
                </button>
                <button
                  onClick={() => setCategory('PIZZA')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'PIZZA' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodCategoryImg02} alt='' />
                  Pizza
                </button>
                <button
                  onClick={() => setCategory('BREAD')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BREAD' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodCategoryImg03} alt='' />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => {
              return (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={heroImg5} alt='why-foodie' className='w-100'></img>
            </Col>
            <Col lg='6' md='6'>
              <div className='why__foodie'>
                <h2 className='foodie-title mb-4'>
                  Why <span>Foodie?</span>
                </h2>
                <p className='foodie-desc'>
                  Being a foodie means having a passionate interest in exploring and enjoying diverse culinary experiences. It's about savoring flavors, appreciating the artistry of cooking, and discovering new dishes and cuisines. Foodies often seek out unique dining experiences, share their gastronomic adventures, and celebrate the cultural richness food brings to life.
                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className=' border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Fresh and Tasty
                      food
                    </p>
                    <p className=' choose__us-desc'>
                      Fresh and tasty food elevates the dining experience, bringing joy and satisfaction with every bite. The vibrant flavors of freshly sourced ingredients create dishes that are not only delicious but also nutritious.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Quality support
                    </p>
                    <p className='choose__us-desc'>
                      Quality support is essential for ensuring customer satisfaction and trust. It involves prompt, professional assistance, addressing issues efficiently and courteously. 
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Order from any
                      location
                    </p>
                    <p className='choose__us-desc'>
                      "Any location" refers to the ability to provide services or products regardless of geographical constraints. It highlights flexibility and accessibility, ensuring that customers can benefit from offerings no matter where they are.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>
            <Col lg='12'>
              <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} showIndicators={false}>
                {hotPizza.map((item) => (
                  <div key={item.id}>
                    <ProductCard item={item} />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-40'>
                  What our <span>customers </span>are saying
                </h2>
                <p className='testimonial__desc'>
                  "Delicious food, excellent service, and a welcoming atmosphere. Highly recommended!' Join us and experience it for yourself today."
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt='testimonial-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
