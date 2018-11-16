import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Col, CardDeck } from 'reactstrap';

export class About extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-success">ABOUT MEE</h1>
                <Col>
                    <CardDeck>

                        <Card body outline color="info">
                            <CardBody>
                                <CardTitle>
                                    <h2 className="text-info"> General Info </h2>
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
                                    <h2 className="text-info"> Skills </h2>
                                </CardTitle>

                                <CardText>
                                    <p> R </p>
                                    <p> Python </p>
                                    <p> SQL </p>
                                    <p> HTML/CSS </p>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card body outline color="info">
                            <CardBody >
                                <CardTitle>
                                    <h2 className="text-info"> Classes </h2>
                                </CardTitle>

                                <CardText>
                                    <p> <strong>CSE-142</strong> (Java) </p>
                                    <p> <strong>INFO-180</strong> (Python) </p>
                                    <p> <strong>INFO-201</strong> (R) </p>
                                    <p> <strong>INFO-330</strong> (SQL) </p>
                                    <p> <strong>INFO-340</strong> (HTML/CSS/JavaScript) </p>
                                    <p> <strong>INFO-360</strong> (Design) </p>
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