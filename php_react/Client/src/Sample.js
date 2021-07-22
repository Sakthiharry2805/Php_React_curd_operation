import React, { Component } from 'react';
import axios from "axios";
import { Form, FormGroup, Label,Button,Input,Row,Col,Card,CardBody, Container } from 'reactstrap';
import { useHistory, useParams } from "react-router-dom";

class Edituser extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            name:"",
            age:"",
            email:"",
            gender:"",
            dob:"",
            address:""
        };
    }
    componentDidMount() {
      axios
      .get(`http://localhost:12345/users`+this.props.match.params.id)
          .then((response) => {
              const data = response.data;
              this.setState({
                name:data.name,
                age:data.age,
                email:data.email,
                gender:data.gender,
                address:data.address,
                dob:data.dob
              });
  });
    }
   
    onChangeName(e) {
        this.setState({ name: e.target.value })
      }
    onChangeAge(e) {
        this.setState({ age: e.target.value })
      }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
      }
      onChangeGender(e) {
        this.setState({ gender: e.target.value })
      }
      onChangeDob(e) {
        this.setState({ dob: e.target.value })
      }
     
    onChangeAddress(e) {
        this.setState({ address: e.target.value })
      }
    
    
      onSubmit(e) {
        e.preventDefault()
        const userObject = {
          name: this.state.name,
          email: this.state.email,
          age: this.state.age,
          gender:this.state.gender,
          dob:this.state.dob,
          address:this.state.address         

        };
        axios.put('http://localhost:12345/user'+this.props.match.params.id, userObject,{
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(res => console.log(res.data));
        }    

render()
{
    // const queryParams = new URLSearchParams(window.location.search);
    // const id = queryParams.get('_id')
    // console.log(id)
    return (
        <Card>
        <CardBody>
        <Container>
        <Form onSubmit={this.onSubmit}>        
        <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={10}>
            <Input type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.onChangeName} required/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="age" sm={2}>Age</Label>
            <Col sm={10}>
            <Input type="number" name="age"  placeholder="Enter your age" value={this.state.age} onChange={this.onChangeAge} required/>
            </Col>
        </FormGroup>
        <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                <Input type="email" name="email"  placeholder="Enter your Email" value={this.state.email} onChange={this.onChangeEmail} required/>
                </Col>
        </FormGroup>  
        <FormGroup row>
                <Label for="email" sm={2}>Date pf Birth</Label>
                <Col sm={10}>
                <Input type="date" name="dob"  placeholder="Enter your date of birth" value={this.state.dob} onChange={this.onChangeDob} required/>
                </Col>
        </FormGroup>  
        <FormGroup tag="fieldset" row>
        <Row><Col>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.onChangeGender}
            />
            Male
          </label>
        </div>
        </Col>
        <Col>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.onChangeGender}
            />
            Female
          </label>
        </div>
        </Col>
        <Col>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.gender === "Other"}
              onChange={this.onChangeGender}
            />
            Other
          </label>
        </div>
        </Col>
        </Row>
        </FormGroup> 
        <FormGroup row>
                <Label for="comment" sm={2}>Address</Label>
                <Col sm={10}>
                <Input type="textarea" name="text"  value={this.state.address} onChange={this.onChangeAddress}required/>
                </Col>
           </FormGroup>
           <Button outline color="success">Submit</Button>
        </Form>
        </Container>
        </CardBody>
        </Card>      
    );
  }
}

export default Edituser;