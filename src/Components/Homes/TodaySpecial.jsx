

import { Box,  Image, Text } from "@chakra-ui/react";
import React from "react";

export const TodaySpecial=()=>{

    return (
        < 
        // dispaly='flex'
        //  border='1px solid'
        //  borderColor='yellow.500'
        //  w='100%'
        //  h='100%'
        //  gap='4%'
        //  p='10px'
        //  justifyContent='space-evenly'
        >
           <Box display='flex'
            flexDirection='column'
            w='48%'
            h='100%'
            p='5px'
            justifyContent='space-around'
           >
            <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/rajnath_singh_nadda_amit_shah.jpg?size=647:363'/>
            {/* <Divider/> */}
            <Text fontSize='17px'>BJP’s presidential nominee will be a surprise. But who might that be?</Text>

           </Box>
           <Box display='flex'
            flexDirection='column'
            w='48%'
            h='100%'
            p='5px'
           
            justifyContent='space-around'
           >
            <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/bulldozer_demolition_0_1200x768.jpeg?size=647:363'/>
            <Text fontSize='17px'>What is the due process of law that should be followed in demoli</Text>

           </Box>
        </>
    )
}