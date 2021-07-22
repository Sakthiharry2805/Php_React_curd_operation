import React, { Component } from 'react';
import axios from "axios";
import { Form, FormGroup, Label,Button,Input,Row,Col,Card,CardBody, Container } from 'reactstrap';

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
            customer_name:"",
            customer_age:"",
            customer_email:"",
            customer_gender:"",
            customer_dob:"",
            customer_address:""
        };
    }
    componentDidMount() {
      axios
      .get(`http://localhost:1001/customer/edit.php?customer_id=`+this.props.match.params.customer_id)
          .then((response) => {
              const data = response.data;
              this.setState({
                customer_name:data.customer_name,
                customer_age:data.customer_age,
                customer_email:data.customer_email,
                customer_gender:data.customer_gender,
                customer_address:data.customer_address,
                customer_dob:data.customer_dob
              });
  });
    }
   
    onChangeName(e) {
        this.setState({ customer_name: e.target.value })
      }
    onChangeAge(e) {
        this.setState({ customer_age: e.target.value })
      }
    onChangeEmail(e) {
        this.setState({ customer_email: e.target.value })
      }
      onChangeGender(e) {
        this.setState({ customer_gender: e.target.value })
      }
      onChangeDob(e) {
        this.setState({ customer_dob: e.target.value })
      }
     
    onChangeAddress(e) {
        this.setState({ customer_address: e.target.value })
      }
    
    
      onSubmit(e) {
        e.preventDefault()
        const userObject = {
          customer_name: this.state.customer_name,
          customer_email: this.state.customer_email,
          customer_age: this.state.customer_age,
          customer_gender:this.state.customer_gender,
          customer_dob:this.state.customer_dob,
          customer_address:this.state.customer_address         

        };
        axios.post('http://localhost:1001/customer/update.php?customer_id='+this.props.match.params.customer_id, userObject,{
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
          })
          .then(res => console.log(res.data));
          window.location="/viewuser"
        }    

render()
{
    return (
        <Card>
        <CardBody>
        <Container>
        <Form onSubmit={this.onSubmit}>        
        <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={10}>
            <Input type="text" name="name" placeholder="Enter your name" value={this.state.customer_name} onChange={this.onChangeName} required/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="age" sm={2}>Age</Label>
            <Col sm={10}>
            <Input type="number" name="age"  placeholder="Enter your age" value={this.state.customer_age} onChange={this.onChangeAge} required/>
            </Col>
        </FormGroup>
        <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                <Input type="email" name="email"  placeholder="Enter your Email" value={this.state.customer_email} onChange={this.onChangeEmail} required/>
                </Col>
        </FormGroup>  
        <FormGroup row>
                <Label for="email" sm={2}>Date pf Birth</Label>
                <Col sm={10}>
                <Input type="date" name="dob"  placeholder="Enter your date of birth" value={this.state.customer_dob} onChange={this.onChangeDob} required/>
                </Col>
        </FormGroup>  
        <FormGroup tag="fieldset" row>
        <Row>
        <legend className="col-form-label col-sm-2" name="gender">Gender</legend>
        <Col>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.customer_gender === "Male"}
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
              checked={this.state.customer_gender === "Female"}
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
              checked={this.state.customer_gender === "Other"}
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
                <Input type="textarea" name="text"  value={this.state.customer_address} onChange={this.onChangeAddress}required/>
                </Col>
           </FormGroup>
           <Button outline color="success">Update</Button>
        </Form>
        </Container>
        </CardBody>
        </Card>      
    );
  }
}

export default Edituser;