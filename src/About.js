import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Col, CardDeck } from 'reactstrap';

export class About extends Component {
    render() {
        return (
            <div className="container">
                <h1>ABOUT MEE</h1>
                <Col>
                    <CardDeck>

                        <Card body outline color="info">
                            <CardBody>
                                <CardTitle>
                                    <h2> General Info </h2>
                                </CardTitle>

                                <CardText>
                                    <p> Taiwanese </p>
                                    <p> Multi-Lingual </p>
                                    <p> Chef </p>
                                    <p> Video-Gamer </p>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card body outline color="info">
                            <CardBody>
                                <CardTitle>
                                    <h2> Skills </h2>
                                </CardTitle>

                                <CardText>
                                    <p> R </p>
                                    <p> Python </p>
                                    <p> SQL </p>
                                    <p> HTML/CSS </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardDeck>
                    <br />
                </Col>
            </div>
        );
    }
}