import React from 'react';
import {Card, Col, ListGroup, ListGroupItem} from "react-bootstrap";

function Country(props) {
    return (
        <div style={{float: "left", height: "90vh", padding: "10px"}}
             className="col-sm-6 col-lg-4 col-md-6">
            <Col className="text-center" style={{padding: "15px"}}>
                <Card>
                    <Card.Img src={props.country.flag} style={{
                        height: "100px",
                        width: "100px",
                        display: "block",
                        "margin-left": "auto",
                        "margin-right": "auto"
                    }}/>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>NAME: {props.country.name}</ListGroupItem>
                            <ListGroupItem>CAPITAL: {props.country.capital}</ListGroupItem>
                            <ListGroupItem>REGION: {props.country.region}</ListGroupItem>
                            <ListGroupItem>SUBREGION: {props.country.subregion}</ListGroupItem>
                            <ListGroupItem>POPULATION: {props.country.population}</ListGroupItem>
                            <ListGroupItem>BORDERS:
                                {props.country.borders.map(border =>
                                    (<Card.Text style={{display: "inline"}}>  {border}  </Card.Text>))
                                }
                            </ListGroupItem>
                            <ListGroupItem>LANGUAGES: {props.country.languages.map(lang => (
                                <div>
                                    <Card.Text style={{display: "inline"}}>LANGUAGE: {lang.name}  </Card.Text>
                                    <Card.Text style={{display: "inline"}}>NATIVE NAME: {lang.nativeName}</Card.Text>
                                </div>))}
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
}

export default Country;