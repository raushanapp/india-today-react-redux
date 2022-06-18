import { Box, Divider, Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import {Link} from "react-router-dom"
import React from "react";
const autoCities=[
    {
      heading:"AUTO",
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Picture_1_1200x768.png?size=370:208",
      title:"JK Tyre announce motorsport plans for 2022: Gaurav Gill pilot run at WRC Kenya and more",
      subTitle1:"2022 Hyundai Venue launched at Rs 7.53 lakh",
      subTitle2:"Citroen C3 review, first drive"
    },
    {
        heading:"EDUCATION TODAY",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/naveen-patnaik_pti_0_1200x768.png?size=370:208",
        title:"Residential school for underprivileged children in Kalahandi inaugurated by Odisha CM",
        subTitle1:"UNICEF conducts workshop for effective reporting on child health",
        subTitle2:"50-year-old BMC sanitation worker sweeps through Maharashtra Class 10 board exam with 57% marks"
    },
    {
        heading:"CITIES",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/1200_(2)_3.jpg?size=370:208",
        title:"8 held with gold worth Rs 3.9 crore at Mumbai airport",
        subTitle1:"Child trafficking racket busted in Delhi; infant rescued",
        subTitle2:"Fire breaks out in wooden factory in Delhi's Bindapur; no casualties"
    }

]



export const AutoCities = ()=>{

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
         {autoCities.map((e,index)=>(
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