
import { Box,  Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
const latest = [
    {
      image:"https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202206/kawah_ijen_indonesia_volcano_oneironaut_1-sixteen_nine.jpg?size=98:55",
      title:"Indonesia: धरती का इकलौता ज्वालामुखी जहां से निकलता है नीला लावा, यहां तेजाब की झील भी"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/untitled_design_3_2-sixteen_nine.jpg?size=98:55",
        title:"Presidential Election 2022: शरद पवार के बाद अब फारुक अब्दुल्ला भी पीछे हटे, क्या ये है वजह?"
    },

    {
        image:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/dinesh_karthik_1-sixteen_nine.jpg?size=98:55",
        title:"Dinesh Karthik: ‘मुझे पता है ड्रॉप होना क्या होता है..’, कमाल की पारी के बाद इमोशनल हुए दिनेश कार्तिक"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/boat_xtend_sport-sixteen_nine.jpg?size=98:55",
        title:"Bluetooth Calling वाली boAt Xtend Sport लॉन्च, कम कीमत में मिलेंगे 700 से ज्यादा फिटनेस मोड"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202206/delivery-sixteen_nine.jpg?size=98:55",
        title:"I Miss You... जब डिलीवरी बॉय महिला को वॉट्सऐप पर भेजने लगा भद्दे मैसेज!"
    }
]

export const LatestAaj = () =>{
    

    return (
        // start box latest start
        <Box display='flex'
          flexDirection='column'
          // border='2px solid'
          // borderColor='yellow.500'
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
               <Heading fontSize='19px'>LATEST FROM AAJ TAK</Heading>
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

               {latest.map((e,index)=>(
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