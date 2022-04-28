import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ListGroup } from "react-bootstrap"
import Table from 'react-bootstrap/Table'

/*  Request API use with AXIOS GET, use the Hooks useEffect & useState use of HOOKS for lifecycle  */

function Holy(props) {                
  const [val, setVal] = useState([]);

  useEffect(() => {
    axios.get("https://calendarific.com/api/v2/holidays?&api_key=50dfd06bb29cf79a0b4c506221fb3d9c520ca7af&country=CO&year=2022")
      .then(res => {
        const data = res.data;
        setVal(data.response.holidays)
      })
  }, []);

/*  Render by reactBootstrap, it iterates through the values requested with the map method  */

  return (

    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td><b>DATE</b>{val.map((v) => <ListGroup.Item variant='info'><b>{v.date.iso}</b></ListGroup.Item>)}</td>
          <td><b>DESCRIPTION</b>{val.map((v) => <ListGroup.Item variant='info'><b>{v.name}</b></ListGroup.Item>)}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Holy