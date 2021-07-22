import React, { Component } from 'react';
import { Table,Container } from 'reactstrap';
import { Button} from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
class Viewuser extends Component {
  constructor(){
          super() 
            this.state = {
              customer_name:"",
              customer_age:"",
              customer_email:"",
              customer_gender:"",
              customer_dob:"",
              customer_address:"",
              tableData: []
            }          
        }
componentDidMount(){
    this.getData();
      }
getData() {
  // const hostURL = location.protocol + '//' + location.hostname + location.pathname;
  // this.serverRequest =
      axios
          .get(`http://localhost:1001/customer/view.php`,)
              .then((response) => {
                  const data = response.data;
                  this.setState({tableData:data});
      });
    }

    deleteUser = customer_id => {
    window.location.reload();
      axios
        .delete(`http://localhost:1001/customer/delete.php?customer_id=` + customer_id, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          console.log(res);
        });
    };
    
  render() {
    return (       
          <Container>          
            <Table striped bordered hover size="sm">              
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>Gender</th>
                    <th>DATE</th>
                    <th>ADDRESS</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        this.state.tableData.map((tdata, i) =>(
                            <tr key={tdata.customer_id}>
                                {/* <td>{tdata.customer_id}</td> */}
                                <td>{tdata.customer_name}</td>
                                <td>{tdata.customer_age} </td>
                                <td>{tdata.customer_email} </td>
                                <td>{tdata.customer_gender} </td>
                                <td>{tdata.customer_dob} </td>
                                <td>{tdata.customer_address} </td>                                
                                <td><Link className="btn btn-outline-primary mr-2" to={"/user/"+tdata.customer_id}>Edit</Link></td>     
                                <td><Button name="delete" onClick={() => this.deleteUser(tdata.customer_id)} variant="outline-danger">Delete</Button></td>
                            </tr>
                      ) )
                    }                    
                </tbody>
            </Table>
            </Container>
    )
}
}
export default Viewuser;