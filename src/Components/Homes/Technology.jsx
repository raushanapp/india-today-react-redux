import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const tech=[
    {
      heading:"TECHNOLOGY",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/RTS4TA0P_1200x768.png?size=370:208",
      title:"SpaceX may have violated US labour law by firing employees who criticised Elon Musk’s behaviour",
      subTitle1:"Not Pegasus, Hermit is reportedly new spyware used by governments to target high-profile people",
      subTitle2:"Edtech company Unacademy lays off another 150 employees"
    },

]



export const Technology=()=>{

    return (

        <Box display='flex'
         // border='2px solid'
         // borderColor='yellow.500'
         w='35%'
         h='100%'
         p='5px'
         gap='10px'
         justifyContent='space-around'
        >
         {tech.map((e,index)=>(
            <Box key={index} display='flex'
            // border='1px solid'
            // borderColor='blue.500'
            w='100%'
            h='100%'
            p='10px'
            // gap='0px'
            justifyContent='space-around'
            flexDirection='column'
            >
             <Box display='flex'
                // border='2px solid'
                // borderColor='gray.500'
                w='100%'
                h='2%'
                p='5px'
                // gap='20px'
                // justifyContent='space-around'
             
             >
                <Heading fontSize='19px'>{e.heading}</Heading>
             </Box>
              <Box display='flex'
                // border='2px solid'
                // borderColor='yellow.500'
                w='100%'
                h='91%'
                p='5px'
                gap='10px'
                justifyContent='space-around'
                flexDirection='column'
              >
                 <Image src={e.image}/>
                  <Divider/>
                  <Heading fontSize='22px'>{e.title}</Heading>
                  <Divider/>
                  <UnorderedList>
                     <ListItem>{e.subTitle1}</ListItem>
                  </UnorderedList>
                  <Divider/>
                  <UnorderedList>
                     <ListItem>{e.subTitle2}</ListItem>
                  </UnorderedList>
                  {/* <Link to='/more'>More</Link> */}

              </Box>

            </Box>
         ))}
        </Box>
    )
}