import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Users = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
     axios({
       url: "http://localhost:8080/item",
       params: {
         page: 1,
       },
     }).then((res) => {
       setData(res.data);
     });
    }, [])
    
  return (
    <div style={{
      display:"flex",
      justifyContent:"center"
    }}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>id</th>
            <th>see more</th>
          </tr>
        </thead>
      <tbody>
      {Data.map((el) => (
        <tr key={el.id}>
          <td>id:{el.id}</td>
          <td>name:{el.title}</td>
          <td>
            <Link to={`/users/${el.id}`}>see more</Link>
          </td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
}
