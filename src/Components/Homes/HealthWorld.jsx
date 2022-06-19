
import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const healthWorld=[
    {
      heading:"HEALTH",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/thought-catalog-fnztlIb52gU-un_1200x768.jpeg?size=370:208",
      title:"How diets recommended by social media experts could do more damage than good",
      subTitle1:"Heatwave directly impact your stomach, heart and other organs, says doctors",
      subTitle2:"Will WHO take the monkey out of monkeypox?"
    },
    {
        heading:"WORLD",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/pregnant_1200x768.jpeg?size=370:208",
        title:"Monkeypox infection may lead to adverse outcomes for foetus, newborns & mother: WHO report",
        subTitle1:"House of cards actor Kevin Spacey given bail, what happens to #metoo now?",
        subTitle2:"How Will A 4-Day Work Week Help Sri Lanka's Food Crisis?"
    },
    {
        heading:"INDAI TODAY INSIGHT",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/20220617028L_1200x768.jpeg?size=370:208",
        title:"Why army aspirants are protesting against Agnipath scheme",
        subTitle1:"From the archives (1998) | I know I’d be a good mother but I need a man as a prop. I can’t go to a sperm bank or have a test-tube baby: Rekha",
        subTitle2:"Why make-up with skincare benefits is trending"
    }

]


export const HealthWorld = ()=>{

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
         {healthWorld.map((e,index)=>(
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