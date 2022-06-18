import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const science=[
    {
      heading:"SCIENCE",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/pjimage_-_2022-06-17T215051.07.jpg?size=370:208",
      title:"Countries queue up to get a piece of asteroid that hides ingredients for life",
      subTitle1:"Australian scientists develop model to spot soft corals most at risk of bleaching",
      subTitle2:"In Tarantula Nebula, a stunning view of stars being born"
    },

]
export const Science = ()=>{

    return (
        <Box display='flex'
        //  border='2px solid'
        //  borderColor='yellow.500'
         w='35%'
         h='100%'
         p='5px'
         gap='10px'
         justifyContent='space-around'
        >
         {science.map((e,index)=>(
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
                // p='5px'
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