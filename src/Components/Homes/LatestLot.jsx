import { Box,  Heading, Text } from "@chakra-ui/react";
import React from "react";
const lotThe = [
    {
      title:"Nakkhul, wife Sruti welcome baby boy via water birth"
    },
    {
        title:"Elina Svitolina against US Open’s decision to allow Russia and Belarusian players’ participation – I don't support it"
    },

    {
        title:"Sarees takeover dresses at the Royal Ascot Ladies Race Day 2022"
    },
    {
        title:"What makes Hardik Pandya a great captain? Gujarat Titans’s pacer Yash Dayal explains"
    },
    {
        title:"Congress accuses BJP of using pressure tactics for Maharashtra Legislative Council elections"
    },
    {
        title:"Ranbir Kapoor's leaked poster from Shamshera! Director Karan Malhotra feels fans couldn't wait anymore"
    },
    {
        title:"Zaheer Khan reveals Hardik Pandya's ideal batting position: He does understand what the team requires"
    }
]


export const LatestLotThe = ()=>{
     
    return (
        // start box latest start
        <Box display='flex'
          flexDirection='column'
        //   border='2px solid'
        //   borderColor='yellow.500'
          w='33%'
          h='100%'
          p='10px'
          gap='5px'
          justifyContent='space-around'
        >
            {/* second box heading start */}
              <Box display='flex'
                // border='1px solid'
                // borderColor='blue.400'
                w='100%'
                h='8%'
                p='10px'
              >
               <Heading fontSize='19px'>LATEST OF THE LOT</Heading>
              </Box>
            {/* second box heading end */}
            {/* third box start */}
              <Box  display='flex'
               flexDirection='column'
               border='1px solid'
               borderBottom='none'
               borderColor='gray.400'
               w='100%'
               h='90%'
               gap='10px'
               justifyContent='space-around'
            //    justifyItems='center'
              >

               {lotThe.map((e,index)=>(
                  <Box key={index}
                   display='flex'
                   borderBottom='1px solid'
                   borderColor='gray.400'
                   w='100%'
                   h='19%'
                   p='5px'
                   gap='5px'
                   justifyContent='center'
                >
                  <Text fontSize='14px'>{e.title}</Text>

                </Box>
               ))}
              </Box>
            {/* third box end */}

        </Box>
    )

}