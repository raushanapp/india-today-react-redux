import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const lawCrime=[
    {
      heading:"LAW",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Bombay_HC__PTI__1200x768_0_120_7_1200x768.jpeg?size=370:208",
      title:"Man accused of murder extradited from Czech Republic, tells Bombay HC he lost touch with lawyer",
      subTitle1:"Indrani had asked me to move on: Rahul Mukerjea tells court in Sheena Bora case",
      subTitle2:"Bombay HC rejects pleas by Anil Deshmukh, Nawab Malik to vote for Maharashtra Legislative Council polls"
    },
    {
        heading:"CRIME",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/arrest_2_1200x768.jpeg?size=370:208",
        title:"5 arrested for murder of 28-year-old man in Delhi’s Deep Vihar",
        subTitle1:"83 arrested for creating ‘nuisance’ during welcome rally for bailed criminal in Delhi",
        subTitle2:"Woman killed by lover for insisting on marriage in Delhi's Vasant Kunj"
    },
    {
        heading:"FACT CHECK",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/Cover_01.jpg?size=370:208",
        title:"Fact Check: Russia’s lost ships in the war against Ukraine but this US vessel is not one of them",
        subTitle1:"Fact Check: Are senior citizen concessions back in Indian Railways? Viral post is a hoax",
        subTitle2:"Fact Check: A tale of three letters - How a 2020 letter from Amit Shah has become a template for fraud claims"
    }

]


export const LawCrime = ()=>{


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
         {lawCrime.map((e,index)=>(
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