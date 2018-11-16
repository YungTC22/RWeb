import React, { Component } from 'react';
import { Card, Button, CardBody, CardTitle, CardText, Col, CardDeck } from 'reactstrap';

export class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1>RANI CHANG</h1>
                <CardDeck>
                    <Card body outline color="info">
                        <CardBody>
                            <CardTitle>
                                <h2>Introduction</h2>
                                <p></p>
                            </CardTitle>

                            <CardText>
                                <p>Hello :) Welcome to my site!</p>
                                <p>I am a sophomore at the Univeristy of Washington studying B.S Informatics, </p>
                                <p>B.S Health Informatics and Health Information Management, and a minor in Business Entrepreneurship </p>
                                <p>I enjoy Seattle's Weather and GO DAWGS</p>
                                <p>Check Out My Link Below~</p>
                            </CardText>

                            <a target="_blank" href="https://linkedin.com/in/yungtc/">
                                <Button outline color="info" size="lg">Linkedin</Button>
                            </a>

                        </CardBody>
                    </Card>
                </CardDeck>
                <br />
            </div>
        );
    }
}