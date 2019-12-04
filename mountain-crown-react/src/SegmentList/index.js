import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './style.css'


//this will generage cards representing each user's starred segment to the homepage
class SegmentList extends Component {
    render() {
        return (
            <Card style={{ 'max-width': '40%'}} >
                <Row>
                    <Col>
                        <h6 style={{'text-align': 'center'}}>SegmentTitle</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{'text-align': 'center'}}>userPR</p>
                        <p style={{'text-align': 'center'}}>Any additional info on segment</p>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default SegmentList;