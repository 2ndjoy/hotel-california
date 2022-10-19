import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Carousels = () => {
  return (
    <div className='mx-10 my-10'>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?w=900&t=st=1666183962~exp=1666184562~hmac=a930cb236c6c61ce426aae7ebb71f0c695cddf8cfeab67fc83d62966fbf687e8"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?w=900&t=st=1666183993~exp=1666184593~hmac=b688dbfda6c02161a0f50e4589f6ab75e1857c622eff10b24942cb078a8cb850"
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/beautiful-umbrella-chair-around-swimming-pool-hotel-resort_74190-1006.jpg?w=900&t=st=1666184000~exp=1666184600~hmac=0e6aa5c6cc91dd2dc29b81c17dd3a32f1cae2a492e2134da3735dbc6a16bd29d"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='mt-5'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?w=900&t=st=1666183982~exp=1666184582~hmac=f0abdceb31f7559bf893d44c7980e88d8f297ab76de244b601e49c85757f2c78"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button variant="primary"> <Link to='rooms' className='text-white no-underline'>Book Now</Link> </Button>{' '}

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=900&t=st=1666183997~exp=1666184597~hmac=1633d49b8ad6e1dbba0c47f758e06486462257d043086967fd5887834aa84812"
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="primary"> <Link to='rooms' className='text-white no-underline'>Book Now</Link> </Button>{' '}


            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=900&t=st=1666183986~exp=1666184586~hmac=88e0eff21beb02421ddb1e1754c0be41e1244798f0a3616cb3b63d94e0768ea2"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button variant="primary"> <Link to='rooms' className='text-white no-underline'>Book Now</Link> </Button>{' '}

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='mt-5'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg?w=1060&t=st=1666183979~exp=1666184579~hmac=59d9cf0e1159c171f8db13083bce357853b465b86673934c4796c34cd3831f57"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?w=900&t=st=1666184017~exp=1666184617~hmac=a42ec3d68c63e6a31446c047f1a2c5d6ca999aa4fdcf775c2b2fdd6298054803"
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/home-house-exterior-design-showing-tropical-pool-villa-with-greenery-garden-sun-bed-umbrella-pool-towels_41487-361.jpg?w=900"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousels;

