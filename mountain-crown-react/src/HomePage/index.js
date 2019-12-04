import React, { Component } from 'react';
import './style.css';
import SegmentList from "../SegmentList";
import { Container, Row, Col, Card } from 'react-bootstrap';
import SegmentQuickView from "../SegmentQuickView";
// import OauthReceiver from "../OAuthReceiver"
import RenderProp from "../RenderProps";




class HomePage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        //   props go here
      
    }
}
//     componentDidMount() {
//         // this.getSegments();
//   }
    render() {
        console.log(this.props);
        return (

            <div>
            <RenderProp />
        
                <div>
                        <Row>
                            <h6>username's Segments</h6>
                        </Row>

                        <Row>
                            <Col><SegmentList /></Col>
                            <Col><SegmentQuickView /></Col>
                        </Row>
                </div>
            </div>
        )
    }
}

export default HomePage;