import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'


export default function Portfolio() {
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
    </Box>
  )
}
