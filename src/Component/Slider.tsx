
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const items = [
    {
      id: 1,
      altText: 'Slide 1',
      caption: 'Slide 1',
    },
    {
      id: 2,
      altText: 'Slide 2',
      caption: 'Slide 2',
    },
    {
      id: 3,
      altText: 'Slide 3',
      caption: 'Slide 3',
    },
  ];
interface ISliderProps {
}

const Slider: React.FunctionComponent<ISliderProps> = (props) => {
 
    const [Womantext, setWomantext] = useState('Women Collection');
    const [Mentext, setMentext] = useState('Men Collection');
    const [Kidstext, setKidstext] = useState('Kids Collection');
    

  

  return (
    
      <>
          <Carousel className='slider'>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide" */}
         
       <Container fluid className='slider_boxes'>
        <Row className='slider_box_wrap'>
          <Col className='slider_box_one_inner'>

          </Col>
          <Col className='slider_box_one_inner_para'>
          <h1>{Womantext}</h1>
         
          </Col>
        </Row>
       </Container>

         
      
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          {}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        /> */}

<Container fluid className='slider_boxes'>
        <Row className='slider_box_wrap'>
          <Col className='slider_box_two_inner'>

          </Col>
          <Col className='slider_box_two_inner_para'>
          <h1>{Mentext}</h1>
         
          </Col>
        </Row>
       </Container>


        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        /> */}



<Container fluid className='slider_boxes'>
        <Row className='slider_box_wrap'>
          <Col className='slider_box_three_inner'>

          </Col>
          <Col className='slider_box_three_inner_para' >
          <h1>{Kidstext}</h1>
          
          </Col>
        </Row>
       </Container>

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </>

  );
};

export default Slider;
