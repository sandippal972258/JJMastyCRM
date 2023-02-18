import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import images_two from "../Assets/Images/image_two.jpg";
import images_three from "../Assets/Images/image_three.jpg";
import images_four from "../Assets/Images/image_four.jpg";
interface IMonthsproductProps {}

const Monthsproduct: React.FunctionComponent<IMonthsproductProps> = (props) => {
  return (
    <>
      <section className="products">
        <Container>
          <h1>Popular This Months</h1>
          <Row className="products_inner">
            <Col>
              <div className="product_one">
               
                <img src={images_two} alt=""/>
                
               
               <div className="product_info">
                <button className="btn">Shop Now</button>
               </div>
              </div>
            </Col>
            <Col>
              <div className="product_one">
              <img src={images_three} alt=""/>
              <div className="product_info">
                <button className="btn">Shop Now</button>
               </div>
              </div>
              
            </Col>
            <Col>
              <div className="product_one">
              <img src={images_four} alt=""/>
              <div className="product_info">
                <button className="btn">Shop Now</button>
               </div>
              </div>
            </Col>
            <Col>
              <div className="product_one">
              <img src={images_four} alt=""/>
              <div className="product_info">
                <button className="btn">Shop Now</button>
               </div>
              </div>
            </Col>
           
            
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Monthsproduct;
