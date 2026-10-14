import {useEffect} from 'react';
import axios from 'axios';



export default function Home() {


  useEffect(()=>{

    axios.get("/")
    .then((res)=>{
      console.log(res.data);
    });
  },[]);


  return <h1>Welcome to Cricket Score App</h1>;
}
