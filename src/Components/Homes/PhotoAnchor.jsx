
import {  Box,  Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
 const videos =[
    {
        title:"RJD calls for Bihar bandh tomorrow over Agnipath scheme",
        vid:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/bihar-88x50.png?qy9DG6yBqdAZKgLMMJWmAFwfLLMpIxNJ"
    },
    {
        title:"No end to terror attacks in Kashmir: Two targeted killings in one day",
        vid:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/WhatsApp_Image_2022-06-17_at_4-88x50.jpeg?M6iMxt.885xOpQJBzJKj9z28lFwhPPD5"
    }
    ,
    {
        title:"House of cards actor Kevin Spacey given bail, what happens to....",
        vid:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/YT___FB_HORIZONTAL_copy__24__0-88x50.png?Q8gGAIbkSFDrxOGFwsXj1ku1xn57Q.Ox"
    }
 ]
export const PhotoAnchor = () =>{

    return (
        <Box  display='flex'
        //  border='2px solid'
        //  borderColor='teal.400'
         w='100%'
         h='700px'
         p='20px'
         gap='10px'
         justifyContent = "space-around"
        > 
        <Box display='flex'
         flexDirection='column'
         bg='gray.50'
        //  border='1px solid'
        //  borderColor='orange.400'
         w='70%'
         h='100%'
         p='10px'
         gap='10px'
         justifyContent = "space-around"
        
        >
            <Box display='flex'
            //  border='1px solid'
            //  borderColor="cyan.400"
             w='100%'
             h='8%'
             p='5px'
             pt='20px'
            >
              <Heading fontSize='19px'>
                PHOTO
              </Heading>
            </Box>
            <Box display='flex'
             flexDirection='column'
            //  border='1px solid'
            //  borderColor="cyan.400"
             w='100%'
             h='88%'
            //  p='5px'
             justifyContent='space-around'
            >
                <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202206/Flood__5__1200x768.jpeg?size=647:363'/>
               <Box bg='blackAlpha.900' 
                 h='13%'
                 p='20px'
                //  justifyItems='center'
               
               >
               <Heading fontSize='25px' color='white' textAlign='center'>
                Floods at Yellowstone National Park wipe out roads | Pics
                </Heading>
               </Box>

            </Box>

        </Box>
        <Box display='flex'
         flexDirection='column'
         bg='gray.50'
        //  border='2px solid'
        //  borderColor='orange.400'
         w='30%'
         h='100%'
         p='20px'
         gap='5px'
         justifyContent = "space-around"
        >
        <Box display='flex'
            //  border='1px solid'
            //  borderColor="cyan.400"
             w='100%'
             h='5%'
             p='5px'
             pt='10px'
            >
              <Heading fontSize='19px'>
                ANCHOR
              </Heading>
            </Box>
            <Box display='flex'
            //  border='1px solid'
            //  borderColor="cyan.400"
             w='100%'
             h='28%'
             p='5px'
             gap='5px'
            //  pt='20px'
             justifyContent='space-around'
            
            >
            <Box display='flex'
             flexDirection='column'
            //  border='1px solid'
            //  broderColor='gray.400'
             w='33%'
             h='100%'
             p='5px'
             justifyContent='space-around'
            >
             <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202011/rajdeep-1200x768.jpg?8_dbiZ9RwhfL6zJwgTqtxRW3ByaTjE7F&size=190:190'/>
             <Heading fontSize='20px'>
               Rajdeep Sardesai
             </Heading>

            </Box>
            <Box display='flex'
             flexDirection='column'
            //  border='1px solid'
            //  broderColor='gray.400'
             w='33%'
             h='100%'
             p='5px'
             justifyContent='space-around'
            >
             <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202011/Rahul-Kanwal-1200x768.jpg?umwyxUJ4HR7z1jjwQrhMaeLf0HxT5_h8&size=190:190'/>
             <Heading fontSize='20px'>
               Rahul Kanwal
             </Heading>

            </Box>
            <Box display='flex'
             flexDirection='column'
            //  border='1px solid'
            //  broderColor='gray.400'
             w='33%'
             h='100%'
             p='5px'
             justifyContent='space-around'
            >
             <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202011/shiv_aroor-1200x768.jpg?MTststqbE4DuaqiT2LMHb6x3huOyDDS3&size=190:190'/>
             <Heading fontSize='20px'>
                Shiv Aroor
             </Heading>

            </Box>

        </Box>
         <Box display='flex'
             flexDirection='column'
            //  border='1px solid'
            //  borderColor="cyan.400"
             w='100%'
             h='67%'
             p='5px'
             gap='5px'
             justifyContent='space-around'
         >
            <Box display='flex'
            //  border='1px solid'
            //  borderColor="cyan.400"
             w='100%'
             h='8%'
             p='5px'
             pt='10px'
            >
              <Heading fontSize='19px'>
              WATCH RIGHT NOW
              </Heading>
            </Box>
            <Box  display='flex'
             flexDirection='column'
            //  border='1px solid'
            //  borderColor="cyan.400"
             w='100%'
             h='90%'
             gap='5px'
             p='5px'
             justifyContent='space-around'
            >
              {videos.map((e,index)=>(
                <Box  key={index}
                 display='flex'
                //  flexDirection='column'
                 borderBottom="1px solid"
                 borderColor="gray.400"
                 w='100%'
                 h='33%'
                 gap='5px'
                 p='10px'
                 justifyContent='space-around'
                >
                     <Text fontSize='14px'>
                        {e.title}
                    </Text>
                   <Image src={e.vid} h='60px'/>
                </Box>

              ))}
            </Box>
         </Box>

        </Box>

        </Box>
    )
}