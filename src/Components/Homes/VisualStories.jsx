
import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import React from "react";

// import  Slider  from "react-slick";
const viusal = [
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7860/assets/8.jpeg?time=1655482105&size=125:168",
        title:"Oldest Indians with fiftyin mens's T20is"
    },
    {
       image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7858/assets/13.jpeg?time=1655480186&size=125:168",
       title:"Cutting Erin's honeymoon diarie's"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7854/assets/11.jpeg?time=1655475860&size=125:168",
        title:"Highest total in ODis  "
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7856/assets/12.jpeg?time=1655477543&size=125:168",
        title:"Fastest ODi hunders"
    },
    /*
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7855/assets/22.jpeg?time=1655477309&size=125:168",
        title:"5 Bollywood divas who swear by yoga"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7853/assets/20.jpeg?time=1655475383&size=125:168",
        title:"Malaika Arora's Boold Looks"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7851/assets/19.jpeg?time=1655473707&size=125:168",
        title:"Party Ready with Shilpa Shetty"
    },
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7850/assets/19.jpeg?time=1655471827&size=125:168",
        title:"What's Up with Mahira Khan"
    }
    ,
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7845/assets/15.jpeg?time=1655472299&size=125:168",
        title:"B-Town goes Back to Basics"
    }
    ,
    {
        image:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_06/story_7849/assets/19.jpeg?time=1655472038&size=125:168",
        title:"let,s make Alia's favourite salad"
    }
    */
    
]


export const VisualStories = () =>{
    // const settings = {
    //     dot:false,
    //     // className:"center",
    //     // centerMode:true,
    //     // centerPadding:"50px",
    //     infinite:true,
    //     speed:500,
    //     slidesToShow:4,
    //     slidesToScroll:1
    // }

    return (
        <Box display='flex'
         gap='10px'
         justifyContent='space-around'
        //  flexDirection='column'
         w='100%'
         h='100%'
         p='10px'
         
        >
          {/* <Box display='flex'
           w='100%'
           h='8%'
          >
          <Heading fontSize='17px'>VIUSAL STORIES</Heading>
          </Box> */}

            {/* <Slider {...settings}> */}
                {viusal.map((e,index)=>(
                    <Box key={index} 
                    display='flex'
                    flexDirection='column'
                     border="1px solid"
                     borderColor="gray.400"
                     w='23%'
                     h='100%'
                     justifyContent={'space-around'}
                     p='10px'
                    //  gap={'4%'}
                    >
                        <Image src={e.image}/>
                        <Divider/>
                        <Heading fontSize={"17px"}>{e.title}</Heading>

                    </Box>
                ))}

            {/* </Slider> */}
        </Box>
    )
}