import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("sudipta");
  const [password, setPassword] = useState("sudipta");
  const [isLoad, setIsLoad] = useState(false);
  const [suc, setSuc] = useState(false);
  const navigate = useNavigate();

  function Loginform() {
    console.log(email, password);

    if (email === "admin@stockbroker.com" && password === "admin123") {
      return navigate("/dashbord");
    }
    setIsLoad(true);
    axios.get("https://new-mock-api-2.onrender.com/users").then((e) =>
      e.data.forEach((e) => {
        if (e.email === email && e.password === password) {
          setSuc(true);
        }
        setIsLoad(false);
      })
    );
  }

  useEffect(() => {
    if (suc) {
      alert("Successfuly Login");
      navigate("/stock");
    }
  }, [suc]);

  
  if (isLoad) {
    return <Text mt={"50px"}>Loading...</Text>;
  }

  return (
    <FormControl w={"350px"} h={"450px"} margin={"auto"} mt={"100px"}>
      <Text fontSize={"2xl"} fontWeight={500}>
        Login Form
      </Text>
      <FormLabel mt={"30px"}>Email address</FormLabel>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <FormLabel mt={"20px"}>Email address</FormLabel>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />

      <Button onClick={Loginform} mt={"20px"} colorScheme={"blue"}>
        Submit
      </Button>
      <Text onClick={()=>navigate('/')} mt={"20px"} color={"blue"} cursor={"pointer"}>
        Create a New Account
      </Text>
    </FormControl>
  );
}
