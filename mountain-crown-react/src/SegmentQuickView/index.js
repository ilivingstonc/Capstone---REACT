import React, { Component } from 'react';
import LeaderBoard from "../LeaderBoard"
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

class SegmentQuickView extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card className="ml-auto" style={{ 'max-width': '60%'}} >
                        <Card.Header>Segment Title</Card.Header>
                        <Row>
                            <Col>
                                <h6 style={{'text-align': 'center'}}>Segment QuickView Card</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LeaderBoard/>
                            </Col>
                            <Col>
                                <h6>username</h6>
                                <p>user's PR</p>
                            </Col>
                        </Row>
                        <Row>
                            <Button className="ml-auto" href="/mysegment">Expand Segment</Button>
                        </Row>    
                    </Card>
                </Container>
            </div>
        )
    }
}

export default SegmentQuickView;


