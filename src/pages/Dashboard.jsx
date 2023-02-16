import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import InitialFocus from "../components/InitialFocus";


export default function Dashboard() {

  function ListStock() {
    let company_logo = document.getElementById("company_logo");
    let company_name = document.getElementById("company_name");
    let company_type = document.getElementById("company_type");
    let stock_exchange = document.getElementById("stock_exchange");
    let total_shares = document.getElementById("total_shares");
    let cost_per_share = document.getElementById("cost_per_share");
    let price_action = document.getElementById("price_action");

    let data = {
      company_logo: company_logo.value,
      company_name: company_name.value,
      company_type: company_type.value,
      stock_exchange: stock_exchange.value,
      total_shares: total_shares.value,
      cost_per_share: cost_per_share.value,
      price_action: price_action.value,
    };

    axios
      .post("https://new-mock-api-2.onrender.com/blogs", data)
      .then((response) => {
        alert("successfuly added data");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://new-mock-api-2.onrender.com/blogs")
      .then((e) => setData(e.data));
  }, []);

  function deliteItem(e) {
    console.log(e.id);
    axios
      .delete("https://new-mock-api-2.onrender.com/blogs/" + e.id)
      .then((response) => {
        alert("successfuly delete");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
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
        <Box>
          <Link href="/login" >Sign Out</Link>
        </Box>
      </Flex>
      <Box>
        <FormControl w={"400px"} margin={"auto"} mt={"50px"}>
          <Text fontSize={"2xl"} fontWeight={500}>
            Stock Register
          </Text>
          <FormLabel mt={"30px"}>Company Logo Url</FormLabel>
          <Input id="company_logo" type="url" />

          <FormLabel mt={"20px"}>Company Name</FormLabel>
          <Input id="company_name" type="text" />

          <FormLabel mt={"20px"}>Company Type</FormLabel>
          <Select id="company_type">
            <option value="">Company Type</option>
            <option value="Bank">Bank</option>
            <option value="IT">IT</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharma">Pharma</option>
            <option value="Oil ">Oil </option>
          </Select>

          <FormLabel mt={"20px"}>Stock Exchange</FormLabel>
          <Select id="stock_exchange">
            <option value=""></option>
            <option value="NSC">NSC</option>
            <option value="BSC">BSC</option>
          </Select>

          <FormLabel mt={"20px"}>Total Shares</FormLabel>
          <Input id="total_shares" type="number" />

          <FormLabel mt={"20px"}>Cost Per Share</FormLabel>
          <Input id="cost_per_share" type="number" />

          <FormLabel mt={"20px"}>Price Action</FormLabel>
          <Input id="price_action" type="text" />

          <Button mt={"20px"} colorScheme={"green"} onClick={ListStock}>
            Submit
          </Button>
        </FormControl>
      </Box>
      <Box mb={"100px"} mt={"50px"}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Company logo</Th>
                <Th>Company name</Th>
                <Th>Company Type</Th>
                <Th>Stock Exchange</Th>
                <Th>Total shares</Th>
                <Th>Cost per share</Th>
                <Th>Price action</Th>
                <Th>Edit Stock</Th>
                <Th>Delete Stock </Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr> */}
              {data.map((e) => (
                <Tr>
                  <Td>
                    <Image w={"40px"} src={e.company_logo} />
                  </Td>
                  <Td>{e.company_name}</Td>
                  <Td>{e.company_type}</Td>
                  <Td>{e.stock_exchange}</Td>
                  <Td>{e.total_shares}</Td>
                  <Td>{e.cost_per_share}</Td>
                  <Td>{e.price_action}</Td>
                  <Td>
                    <InitialFocus />
                  </Td>
                  <Td>
                    <Button onClick={() => deliteItem(e)} colorScheme={"red"}>
                      Delite
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
