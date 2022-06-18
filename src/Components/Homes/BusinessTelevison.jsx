
import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const business=[
    {
      heading:"BUSINESS",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Bombay_stock_exchange_PTI_0.jpeg?size=370:208",
      title:"Markets decline for 6th day; Sensex sheds 135 points",
      subTitle1:"Rate, inflation worries set Indian shares for worst week since May 2020",
      subTitle2:"Gold, silver prices dip on MCX | Check city-wise rates here"
    },
    {
        heading:"TELEVISION",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/MUnawar_0_1200x768.jpeg?size=370:208",
        title:"Munawar Faruqui won't be part of Khatron Ke Khiladi 12, says he needs time alone",
        subTitle1:"Ramdev and Zeenat Aman to Jugjugg Jeeyo cast on reality shows: What to watch on TV this weekend",
        subTitle2:"Fight For My Way to Angel's Last Mission Love, exciting line-up of K-dramas dubbed in Hindi announced"
    },
    {
        heading:"NEWS ANALYSIS",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Motilal_vora_1200x768.jpeg?size=370:208",
        title:"Motilal Vora: Quintessential Congressman who knew how money came into party’s coffers and how it was spent",
        subTitle1:"BJP’s presidential nominee will be a surprise. But who might that be?",
        subTitle2:"No name. But consensus on a consensus candidate: Mamata's meet separates self-seeking from committed Opposition"
    }

]

export const BusinessTelevision = () =>{

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
         {business.map((e,index)=>(
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