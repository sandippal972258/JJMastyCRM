import * as React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


interface IOptionesProps {
}

const Optiones: React.FunctionComponent<IOptionesProps> = (props) => {
  return(
<Container >
    <div className="opt_wrap">
    <Row>
      
        <Col className='opt_inner_one'>
      
       
      
        </Col>
        <Col className='opt_inner_two'>
     
        </Col>
        <Col className='opt_inner_three'>
     
        </Col>
        <Col className='opt_inner_four'>
     
        </Col>
        <Col className='opt_inner'>
     
        </Col>
       
       
    </Row>
    </div>
  
</Container>
  ) ;
};

export default Optiones;
