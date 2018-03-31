import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Grid}from"react-bootstrap"
import axios from 'axios';

class Panel extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            message:''
        }
    }
    handleNameChange(e){
        this.setState({name: e.target.value})
        console.log( e.target.value)
    }
    handleMessageChange(e){
        this.setState({message: e.target.value})
    }
    handleonClickChange(e){
        e.preventDefault();
        console.log('submit button is pressed')
        var data={name: this.state.name,body: this.state.message};
        console.log(data)

        axios.post('http://localhost:8080/confession', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  
   
    render(){
        return(
            <Grid>
             <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                    type="text"
                    value=''
                    placeholder="Enter text"
                    onChange={this.handleNameChange.bind(this)}
                    value={this.state.name}

                />
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" onChange={this.handleMessageChange.bind(this)} value={this.state.message} />
                </FormGroup>
                <button bsStyle="primary" type="submit" block onClick={this.handleonClickChange.bind(this)} >submit  </button>
              
               
            </Grid>
        )
    }
}
export default Panel;