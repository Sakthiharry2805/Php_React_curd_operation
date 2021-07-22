import Adduser from './Adduser'
import Viewuser from './Viewuser';
import { Card,Button,CardBody } from 'reactstrap';
import {  Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Edituser from './Edituser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
      <Container>
      <Row>
        <Col>
        <Card>
          <CardBody >
           <Button outline color="primary">
            <Link to="/adduser">Adduser</Link>
          </Button>
        </CardBody>
        </Card>
        </Col>
        <Col>
        <Card>
         <CardBody>
          <Button  outline color="primary">
            <Link to="/viewuser">Viewuser</Link>
          </Button>
          </CardBody>
          </Card>
          </Col>
          </Row>
          </Container> 
     <Switch>
        <Route path="/adduser">
          <Card>
            <CardBody >
            <Adduser />
            </CardBody>
          </Card>
        </Route>        
        <Route path="/viewuser">
        <Card>
          <CardBody >
          <Viewuser />
          </CardBody>
        </Card>
        </Route>
      <Route exact path="/user/:customer_id" component={Edituser} />
      </Switch>
    </div>
  </Router>
);
}
export default App;