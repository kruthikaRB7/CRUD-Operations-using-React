import React, { Fragment } from 'react';
import {Button, Table}from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import employee from './employee';
import {Link,useNavigate} from 'react-router-dom'

function Home(){

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('id',id);

    }

    const handleDelete = (id) => {
    var index = employee.map(function(e){
      return e.id
    }).indexOf(id);

    employee.splice(index,1);

    history('/');


  }
    return(
        <Fragment>
        <div style={{margin:"3rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                       
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee && employee.length > 0
                        ?
                        employee.map((item) => {
                            return(
                                <tr>
                                    
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.age}
                                    </td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Button onClick={() => handleEdit(item.id, item.name, item.age)}>EDIT</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
            <br>
            </br>
            <Link className = 'd-grid gap-2' to = "/create">
                <Button size="lg">Create</Button>
            </Link>
        </div>
    </Fragment>
    )
}

export default Home;
