import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { Registers } from "../redux/AuthReducer/Action";

export default function Register() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function registerAccount(){
    console.log({userName : uname,email,password})
    dispatch(Registers({userName : uname,email,password}))
  }

  const data = useSelector((e) => e.AuthReducer)
  
  useEffect(()=>{
    if(data.isSuccess){
        alert("successfuly account Created")
        setUname('')
        setEmail('')
        setPassword('')
        navigate('/login')
    }
  },[data])

  if(data.isLooding){
    return <Text mt={'20px'} >Loading...</Text>
  }
  return (
    <FormControl w={"350px"} h={"450px"} margin={"auto"} mt={"100px"}>
      <Text fontSize={"2xl"} fontWeight={500}>
        Register
      </Text>
      <FormLabel mt={"30px"}>User Name</FormLabel>
      <Input
        value={uname}
        onChange={(e) => setUname(e.target.value)}
        type="text"
        placeholder="username"
      />

      <FormLabel mt={"20px"}>Email address</FormLabel>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <FormLabel mt={"20px"}>Password</FormLabel>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />

      <Button onClick={registerAccount} colorScheme={"blue"} mt={"20px"}>
        Submit
      </Button>

      <Text onClick={()=>navigate('/login')} mt={"20px"} color={"blue"} cursor={"pointer"}>
        Already have an account
      </Text>
    </FormControl>
  );
}
