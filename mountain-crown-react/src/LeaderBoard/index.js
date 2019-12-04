import React, { Component } from 'react';
import { Card, NavDropdown } from 'react-bootstrap';
import './style.css'


//this will generage cards representing each user's starred segment to the homepage
class LeaderBoard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem'}} >
                <Card.Body>
                    <Card.Header>Leaderboard</Card.Header>
                    <NavDropdown>
                        <NavDropdown.Item>KOM</NavDropdown.Item>
                        <NavDropdown.Item>QOM</NavDropdown.Item>
                    </NavDropdown>
                    <Card.Text>replace text with segment leaderboard</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default LeaderBoard;


