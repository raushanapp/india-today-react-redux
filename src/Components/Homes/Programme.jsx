
import { Box,  Heading, Image, Text } from "@chakra-ui/react"
import React from "react"
const pro=[
    {
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/riots_1200x768.png?size=88:50",
        title:"Agnipath scheme: Are WhatsApp groups fuelling violent protests?"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/proytest_1_1200x768.png?size=88:50",
        title:"Outrage over Agnipath scheme mishandled by centre? "
    }
    ,
    {
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/bihar_0_1200x768.png?size=88:50",
        title:"Protests against Agnipath scheme rage on: Who's instigating aspirants and what's the way forward?"
    }
    ,
    {
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/anger_1_1200x768.png?size=88:50",
        title:"Anger over Agnipath scheme spreads to more states; Agencies sound alert, ask states to keep tab on social media; more"
    }
    ,
    {
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/Ballia_railway_1200x768.jpeg?size=88:50",
        title:"Cops lathicharge Agnipath protestors in Haryana; vandalism at Ballia railway station in UP; more"
    }
]

export const Programme = ()=>{

    return (
        <Box dispaly='flex'
         flexDirection='column'
         w='30%'
         h='90%'
         p='5px'
         gap='10px'
        //  border='1px solid'
        //  borderColor='red.500'
         justifyContent='space-around'
        >
           <Box display='flex'
                // border='2px solid'
                // borderColor='gray.500'
                w='100%'
                h='5%'
                p='20px'
            >
             <Heading fontSize='19px'>PROGRAMME</Heading>
            </Box>
            {pro.map((e,index)=>(
                <Box  key={index}
                display='flex'
                borderBottom='1px solid'
                borderColor='gray.400'
                 w='100%'
                 h='18%'
                 p='22px'
                 gap="15px"
                 justifyContent='space-around'
                >
                    <Image  src={e.image} h='75px'/>
                    <Text fontSize='14px'>{e.title}</Text>
                    {/* <Divider/> */}

                </Box>
            ))}
        </Box>
    )
}