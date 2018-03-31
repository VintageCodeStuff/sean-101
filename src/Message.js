import React, {Component} from "react";
import {Grid, Row, Col, Panel} from"react-bootstrap"


class Message extends Component{
    render(){
        return(
            <Col xs={12} md={8} mdOffset={2}>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title>coff ID: {this.props.confessionid}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {this.props.body}
                    </Panel.Body>
                    <Panel.Footer>
                        <a href="#">
                        {this.props.published}
                        </a>
                    </Panel.Footer>
                </Panel>
          </Col>  
        );
    }
}
export default Message;