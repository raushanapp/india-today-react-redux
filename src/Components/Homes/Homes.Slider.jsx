

import { Avatar, Box, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const slide = [
    {
      image :"https://akm-img-a-in.tosshub.com/indiatoday/styles/user_picture/public/images/reporter/202010/darpan_x.jpeg?LvFoTdyhubC2adxkBObIAZ_rHaBpfwnR",
      title:"From note ban to Agnipath: The perils of communication gap | OPINION",
      name:"by Darpan Singh"
    },
    {
       image:"https://akm-img-a-in.tosshub.com/indiatoday/styles/user_picture/public/images/reporter/202203/CN_0_x.jpeg?LE9mxhrGhXGbAt6fZ5uK2damXrPKKdso",
       title:"Let’s please lower the temperature of TV debates",
       name:"by Chaiti Narula"
    }
]

export const HomeSlider= ()=>{

    return (
        <Box  display='flex'
          justifyContent='space-around'
          gap='5px'
        
        >
           {slide.map((e,index)=>(
             <Box key={index}
               display='flex'
               flexDirection='column'
               border='1px solid'
               borderColor="gray.400"
               borderRadius="10px"
               w='48%'
               p='10px'
               h='50%'
               alignItems={'center'}
               justifyContent='space-around'
             >
              <Avatar size='xl' name={e.name} src={e.image}/>
              <Heading fontSize='17px'>{e.title}</Heading>
              <Divider/>
              <Text>{e.name}</Text>
             </Box>
           ))}
        </Box>
    )
} 