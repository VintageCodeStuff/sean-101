import React,{Component}from "react";
import {Grid, Row, Col}from"react-bootstrap"
import "./Page.css"

class Main extends Component{
    render(){
        return(
            <Grid className="main-body">
                <Row>
                    <Col xs={8} sm={4} md={4} lg={8}>
                        <h1>
                            Your one-stop soloution to confessing
                        </h1>
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={3}>
                     <h1 className="pull-Right"></h1>
                    </Col >
                </Row>
            </Grid>
        )
    }
}

export default Main;