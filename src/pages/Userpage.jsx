import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react' 
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Userpage = () => {
    const params=useParams();
    const [data, setdata] = useState();
  useEffect(() => {
  axios({
    url: `http://localhost:8080/item/${params.id}`,
    params: {
      page: 1,
    },
  }).then((res) => setdata(res.data));
  }, [])
  
  return (
    <div>
      <div>id:{data?.id}</div>
      <div>
        name:{data?.title} 
      </div>
      <div>price:{data?.price}</div>
    </div>
  );
}
