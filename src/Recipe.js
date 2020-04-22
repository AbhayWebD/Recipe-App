import React, {useState,render} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card, Dropdown} from 'react-bootstrap';

const Recipe = ({title,image,calories,ingredients}) => {
    return (
        <Col md="6" lg="4" className="container">
            <Card className="mb-5 shadow-sm">
            <Card.Img variant="top" src={image} alt="" />
            <Card.Body>
                <Card.Title className="text-uppercase font-weight-bold text-center text-success mb-3 card py-4 border-success text-size">{title}</Card.Title>
                <Card.Text className="card_text">
                
                <Dropdown>
                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        Gredients
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                        <ol>
                            {ingredients.map(ingredient => (
                                <li className="text-break">{ingredient.text}</li>
                            ))}
                        </ol>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        Calories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                        {calories}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    );

}

export default Recipe;
