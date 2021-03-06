

import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const moviesLife=[
    {
      heading:"MOVIES",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/varun_tej_lagaan.jpg?size=370:208",
      title:"Varun Tej reacts to South vs Hindi language debate",
      subTitle1:"Sanjana Sanghi goes 'oh man' on Aditya Roy Kapur's chiselled physique in Rashtra Kavach Om | Exclusive",
      subTitle2:"Masoom star Boman Irani's message for young actors: Don't let the perks of the job get to you | Exclusive"
    },
    {
        heading:"LIFESYTLE",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/BeFunky-collage_-_2022-06-17T2.jpg?size=370:208",
        title:"Shilpa Shetty and her love for vibrant prints. On Fashion Friday",
        subTitle1:"Mahira Khan exudes ethnic elegance in floral-embroidered suit in new pics",
        subTitle2:"Malaika in backless metallic dress is next level glamorous. Kareena reacts"
    },
    {
        heading:"SPORTS",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202206/haridkindvsa4tht20i_1200x768.jpeg?size=370:208",
        title:"IND vs SA, 4th T20I LIVE: Harshal Patel removes dangerous David Miller",
        subTitle1:"IND vs SA: Dinesh Karthik breaks MS Dhoni record after maiden T20I fifty",
        subTitle2:"Tottenham look for top-four push, bring in Yves Bissouma as third signing of the summer"
    }

]
export const MoviesLifeSports =()=>{


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
         {moviesLife.map((e,index)=>(
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