import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Stocks() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [ps, setPs] = useState("");
  const [fl, setFl] = useState("");

  useEffect(() => {
    axios
      .get(`https://new-mock-api-2.onrender.com/blogs?_start=${page}${fl}${ps}`)
      .then((e) => setData(e.data));
  }, [page, ps, fl]);

  const [qty, setQty] = useState(0);

  function BuyShare(e) {
    if(qty){
      alert("successfuly Buy "+e.company_name +" and Qty "+ qty)
    }else{
      alert("fill the qty box")
    }
  }

  return (
    <Box>
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        fontWeight={500}
        fontSize={"23px"}
        bg={"blue.400"}
        height={"80px"}
        color={"white"}
      >
        <Box cursor={"pointer"}>
          <Link href="/stock">Stock</Link>
        </Box>
        <Box>
          <Link href="/portfolio">Portfolio</Link>
        </Box>
        <Box>
          <Link href="/login">Sign Out</Link>
        </Box>
      </Flex>

      <Box mt={'50px'} pl={'20%'} pr={'20%'} display={'flex'} justifyContent={'space-evenly'} >
      <Select
        w={'50%'}
        onChange={(e) => setPs(e.target.value)}
      >
        <option>Sort By Price</option>
        <option value="&_limit=4&_sort=price_action&_order=asc">
          LOW TO HIGH
        </option>
        <option value="&_limit=4&_sort=price_action&_order=desc">
          HIGH TO LOW
        </option>
      </Select>

      <Select w={'50%'}  onChange={(e) => setFl(e.target.value)}>
        <option> Filter by Company</option>
        <option value="&company_type=Bank">Bank</option>
        <option value="&company_type=IT">IT</option>
        <option value="&company_type=Automobile">Automobile</option>
        <option value="&company_type=Pharma">Pharma</option>
        <option value="&company_type=Oil">Oil </option>
      </Select>
      </Box>

      

      <Box>
        {data.map((e) => (
          <Box margin={"auto"} mt={"50px"} w={"50%"} border={"1px solid black"}>
            <Box w={"50%"} margin={"auto"}>
              <Image w={"40%"} src={e.company_logo} />
            </Box>
            <Box>
              <Text fontSize={"4xl"} fontWeight={"bold"}>
                {" "}
                Company Name : - {e.company_name}
              </Text>
            </Box>
            <Box>
              <Text fontSize={"2xl"}> EXCHANGE :- {e.stock_exchange}</Text>
            </Box>
            <Box>
              <Text fontSize={"2xl"}>TYPE :- {e.company_type}</Text>
            </Box>
            <Box>
              <Text fontSize={"2xl"}>TOTAL SHARES :- ₹{e.total_shares}</Text>
            </Box>
            <Box>
              <Text fontSize={"2xl"}>PRICE ACTION :- ₹{e.price_action}</Text>
            </Box>
            <Box>
              <Input
                w={"50%"}
                onChange={(ex) => setQty(ex.target.value)}
                placeholder="Quantity"
              />
            </Box>
            <Box mt={'20px'} mb={"50px"}>
              <Button colorScheme={'blue'} onClick={() => BuyShare(e)}>BUY</Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Flex
        gap={"20px"}
        mt={"50px"}
        mb={"50px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button isDisabled={page === 0} onClick={() => setPage(page - 1)}>
          -
        </Button>
        <Text>{page + 1}</Text>
        <Button onClick={() => setPage(page + 1)}>+</Button>
      </Flex>
    </Box>
  );
}
