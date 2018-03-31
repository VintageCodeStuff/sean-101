import React,{Component}from "react";
import {Grid, Row, Col, Panel}from"react-bootstrap"
import Message from "./Message.js"
import axios from "axios";

class ConfessionBoard extends Component{
    constructor(){
        super();
        this.state={
            confessionData :[]
        };
    }
    RefreshConfessionData(){
        var _this = this;
        console.log("refreshConfessionData called");
        
        axios.get('http://localhost:8080/confessions')
          .then(function (response) {
             _this.setState( {confessionData:response.data.confessions});
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    componentDidMount(){
        this.RefreshConfessionData();
        var abc = this;
        document.addEventListener("onChange",function(event){
            abc.RefreshConfessionData();
        });
    }
    render(){
        
        return(
          <Grid>
              <Row>
                  <Col xs={12} md={8} mdOffset={2}>
                  </Col>
                  
                    {
                        this.state.confessionData.map(
                            function(confession, index) {
                                console.log(confession);
                                return (
                                    <Message 
                                        key={confession._id}
                                        confessionid={confession._id}
                                        name={confession.name}
                                        body={confession.text}
                                        published="today"/>
                                );
                            }
                        )
                    }
                  
                  

              </Row> 
          </Grid>  
        );
    }

}
export default ConfessionBoard;
