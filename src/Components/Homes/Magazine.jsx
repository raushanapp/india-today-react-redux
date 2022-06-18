
import { Box,  Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

// const magazine = [
//     {
//         image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/The_Nation-_Prithviraj_Chouhan.jpg?size=170:96",
//         title:"War over icons: The battle for Prithviraj Chauhan "
//     },
//     {
//         image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/moosewala-1_1200x768.jpeg?size=170:96",
//         title:"Moosewala murder | The gangs of Punjab"
//     }
//     ,
//     {
//         image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Upfront-Nupur_1.jpg?size=170:96",
//         title:"BJP-RSS | Line of offence "
//     }
//     ,
//     {
//         image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Aryan-lead.jpg?size=170:96",
//         title:"Lessons from the Aryan Khan case"
//     }
// ]
export const Magazine =()=>{


    return (
        <Box display='flex'
         flexDirection='column'
        //  border='2px solid'
        //  borderColor = 'green.500'
         w='60%'
         h='400px'
         gap='10px'
         p='20px'
         ml='25px'
         bg='gray.200'
         justifyContent='space-around'
        >
         <Box display='flex' 
        //    border='1px solid'
        //    borderColor='red.800'
           w='100%'
           h='8%'
         >
           <Heading fontSize='20px'>MAGAZINE</Heading>
         </Box>
         
         {/* {magazine.map((e,index)=>( */}
            <Box 
             display='flex'
            //  border='1px solid'
            //  borderColor='teal.300'
             w='100%'
             h='100%'
             p='10px'
             gap='10px'
             justifyContent='space-around'
            >
              <Box display='flex'
            //  border='1px solid'
            //  borderColor='teal.300'
             w='48%'
             h='100%'
             p='10px'
             gap='10px'
             justifyContent='space-around'
              
              >
                <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/The_Nation-_Prithviraj_Chouhan.jpg?size=170:96"/>
                <Text fontSize='14px' fontWeight='bold'>War over icons: The battle for Prithviraj Chauhan </Text>

              </Box>
              <Box display='flex'
            //  border='1px solid'
            //  borderColor='teal.300'
             w='48%'
             h='100%'
             p='10px'
             gap='10px'
             justifyContent='space-around'
              >
                 <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/moosewala-1_1200x768.jpeg?size=170:96"/>
                <Text fontSize='14px' fontWeight='bold'>Moosewala murder | The gangs of Punjab</Text>


              </Box>
            </Box>
         {/* ))} */}
         <Box 
             display='flex'
            //  border='1px solid'
            //  borderColor='teal.300'
             w='100%'
             h='100%'
             p='10px'
             gap='10px'
             justifyContent='space-around'
            >
              <Box display='flex'
            //  border='1px solid'
            //  borderColor='teal.300'
             w='48%'
             h='100%'
             p='10px'
             gap='10px'
             justifyContent='space-around'
              
              >
                <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Upfront-Nupur_1.jpg?size=170:96"/>
                <Text fontSize='14px' fontWeight='bold'>BJP-RSS | Line of offence </Text>

              </Box>
              <Box display='flex'
            //  border='1px solid'
            //  borderColor='teal.300'
             w='48%'
             h='100%'
             p='10px'
             gap='10px'
             justifyContent='space-around'
              >
                 <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Aryan-lead.jpg?size=170:96"/>
                <Text fontSize='14px' fontWeight='bold'>Lessons from the Aryan Khan case</Text>


              </Box>
            </Box>

        </Box>
    )
}