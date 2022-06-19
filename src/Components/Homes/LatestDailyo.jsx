import { Box,  Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
const dailyo = [
    {
      image:"https://akm-img-a-in.tosshub.com/sites/dailyo/?size=88:50",
      title:"Jurassic Park’s long standing battle against scientific accuracy: The rights and the wrongs"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/202206/indian-coins_060822115246.jpg?size=88:50",
        title:"A guide to special commemorative coins in India"
    },

    {
        image:"https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/202206/1234561_061022043617.jpg?size=88:50",
        title:"No points for second place: Those who didn’t make the Top Gun sequel"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/202206/kapil-1820_060822061015.jpg?size=88:50",
        title:"5 times celebs from the Northeast opened up about racist attacks"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/202206/123456_060722114623.jpg?size=88:50",
        title:"5 weirdest films from Cannes 2022 that you should watch"
    }
]



export const LatestDaily = ()=>{

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
               <Heading fontSize='19px'>LATEST FROM DAILYO</Heading>
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

               {dailyo.map((e,index)=>(
                  <Box key={index}
                   display='flex'
                   borderBottom='1px solid'
                   borderColor='gray.400'
                   w='100%'
                   h='19%'
                   p='5px'
                   gap='5px'
                   justifyContent='space-around'
                >
                  <Image src={e.image} h='70px'/>
                  <Text fontSize='14px'>{e.title}</Text>

                </Box>
               ))}
              </Box>
            {/* third box end */}

        </Box>
    )
}