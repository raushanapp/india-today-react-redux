
import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const podcastsIndia=[
    {
      heading:"PODCASTS",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/IOD_India_Today_website_0.png?size=370:208",
      title:"Agnipareeksha for big-bang military reforms | In our Defence, Ep 12",
      subTitle1:"Why Kohli shouldn't have been rested vs South Africa | Sledging Room Episode 01",
      subTitle2:"Kashmir and its Security Puzzle | In our Defence Ep 11"
    },
    {
        heading:"TREDING",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/BeFunky-collage_-_2022-06-17T1_3.jpg?size=370:208",
        title:"Blindfolded man makes Sonu Sood's portrait in viral video",
        subTitle1:"Cute video of a little girl comforting her new pet puppy will melt your heart. Watch",
        subTitle2:"Harsh Goenka shares viral video of man making gigantic rumali rotis"
    },
    {
        heading:"INDIA",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/pjimage_-_2022-06-17T212644.36.jpg?size=370:208",
        title:"Agra remains calm during Friday prayers as police step up vigil",
        subTitle1:"Protesters burn trains, block highways as fury over Agnipath rocks nation | Visuals",
        subTitle2:"In UP's 'warrior village', military aspirants sceptical about Agnipath scheme"
    }

]
export const PodCastsIndia =()=>{


    return (
        <Box display='flex'
        //  border='2px solid'
        //  borderColor='yellow.500'
         w='100%'
         h='650px'
         p='10px'
         gap='20px'
         justifyContent='space-around'
        >
         {podcastsIndia.map((e,index)=>(
            <Box key={index} display='flex'
            // border='1px solid'
            // borderColor='blue.500'
            w='33%'
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
                h='8%'
                p='10px'
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
                p='10px'
                gap='20px'
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