import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Col, CardDeck } from 'reactstrap';
import { AnimatedTypingComponent } from './Typer.js'

export class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            val: "ABOUT ME"
        }

        this.classes = [
            {
                section: "University of Washington 2017 - Present",
                list: [
                    "INFO 201 (R)",
                    "CSE 142 (Java)", 
                    "INFO 360 (Design)", 
                    "INFO 340 (Web Dev)", 
                    "INFO 180 (Python)", 
                    "INFO330 (SQL)",
                ]
            }
        ]

        this.skills = [
            {
                section: "Programming Languages",
                list: [
                    "R", "Python", "HTML/CSS/JavaScript", 
                    "React/Redux", "Java", "SQL",
                ]
            },
            {
                section: "Applications", 
                list: [
                    "Tableau", "PowerBI", "Microsoft Applications"
                ]
            },

            {
                section: "Languages", 
                list: [
                    "Chinese", "Spanish", "Taiwanese"
                ]
            }
        ]

        this.facts = [
            {
                section: "Fun Facts",
                list: [
                    "I am Taiwanese American", 
                    "I am a vegetarian Chef", 
                    "I love video games",
                    "I am multi-lingual",
                    "I aspire to become a data scientist"
                ]
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <h1>< AnimatedTypingComponent val={this.state.val} /></h1>
                <Col>
                    <CardDeck>

                        <Card body outline color="light">
                            <CardBody>
                                <CardTitle>
                                    <h2 className="text-success"> General Info </h2>
                                </CardTitle>

                                <CardText>
                                    {this.facts.map((fact, i) => {
                                        let orderedSkillList = fact.list.sort();
                                        return <Col key={"skill" + i} style={{ fontSize: 17 }}> <strong>{fact.section}</strong>
                                            <ul style={{ margin: 0, fontSize: 16, marginBottom: 5 }}>
                                                {orderedSkillList.map((className, j) => {
                                                    return <li key={"subskill" + i + '-' + j}>{className}</li>
                                                })}
                                            </ul>
                                        </Col>
                                    })}
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card body outline color="light">
                            <CardBody>
                                <CardTitle>
                                    <h2 className="text-success"> Skills </h2>
                                </CardTitle>

                                <CardText>
                                    {this.skills.map((skill, i) => {
                                        let orderedSkillList = skill.list.sort();
                                        return <Col key={"skill" + i} style={{ fontSize: 17 }}> <strong>{skill.section}</strong>
                                            <ul style={{ margin: 0, fontSize: 16, marginBottom: 5 }}>
                                                {orderedSkillList.map((className, j) => {
                                                    return <li key={"subskill" + i + '-' + j}>{className}</li>
                                                })}
                                            </ul>
                                        </Col>
                                    })}
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card body outline color="light">
                            <CardBody >
                                <CardTitle>
                                    <h2 className="text-success"> Classes </h2>
                                </CardTitle>

                                <CardText>
                                    {this.classes.map((classes, i) => {
                                        let orderedSkillList = classes.list.sort();
                                        return <Col key={"skill" + i} style={{fontSize: 17}}><strong>{classes.section}</strong>
                                            <ul style={{ margin: 0, fontSize: 16, marginBottom: 8 }}>
                                                {orderedSkillList.map((className, j) => {
                                                    return <li key={"subskill" + i + '-' + j}>{className}</li>
                                                })}
                                            </ul>
                                        </Col>
                                    })}
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
