
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import{useDispatch, useSelector} from "react-redux"
import { AutoCities } from "../Components/Homes/AutoCities";
import { BusinessTelevision } from "../Components/Homes/BusinessTelevison";
import { HealthWorld } from "../Components/Homes/HealthWorld";
import { HomeSlider } from "../Components/Homes/Homes.Slider";
import { LatestDaily } from "../Components/Homes/LatestDailyo";
import { LatestAaj } from "../Components/Homes/LatestFromAaj";
import { LatestLotThe } from "../Components/Homes/LatestLot";
import { LawCrime } from "../Components/Homes/LawCrime";
import { Magazine } from "../Components/Homes/Magazine";
import { MoviesLifeSports } from "../Components/Homes/MoviesLifeSports";
import { PhotoAnchor } from "../Components/Homes/PhotoAnchor";
import { PodCastsIndia } from "../Components/Homes/PodcastsIndiaTrending";
import { Programme } from "../Components/Homes/Programme";
import { Science } from "../Components/Homes/Science";
import { Technology } from "../Components/Homes/Technology";
import { TodaySpecial } from "../Components/Homes/TodaySpecial";
import { VisualStories } from "../Components/Homes/VisualStories";
import { getHome } from "../Stores/Homes/action.homes";

export const Home = ()=>{
    const dispatch = useDispatch()
    const {data} =useSelector((state)=>state.home)
    // console.log("data:",data.articles.title)
    // data.articles.map((e)=>(console.log(e.title)))

    useEffect(()=>{
        dispatch(getHome())
    },[])

    return (
        // main box start from here 
        <Box  display='flex'
          flexDirection='column'
          w='100%'
        //   border='2px solid'
        //   borderColor='red.700'
          justifyContent='space-between'
          gap='5%'
          p='10px'
        >      
         {/* top Stores and opinion box start */}
          <Box   display='flex'
        //   flexDirection='column'
          w='100%'
          h='650px'
        //   border='2px solid'
        //   borderColor='gray.700'
          justifyContent='space-around'
          gap='1%'
          p='20px'

          >
         <Box display='flex'
          flexDirection='column'
          w='33%'
          h='100%'
          border='1px solid'
          borderColor='gray.400'
          justifyContent='space-around'
          gap='2%'
          p='5px'
         > 
          <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202206/ITO_students_1200x768.jpeg?size=483:271' 
          
          />
          <Heading fontSize='22px'>Agnipath protests LIVE: 1 dead, 13 injured in Telangana in firing, Bihar Dy CM's house attacked</Heading>
            <Box display="flex"
            //   border='1px solid'
            //   borderColor='yellow.600'
              w='100%'
              h='40%'
              gap='2%'
              justifyContent='space-around'
            >
            <Box display="flex"
             flexDirection='column'
            //   border='1px solid'
            //   borderColor='yellow.600'
              w='49%'
              h='100%'
              gap='2%'
              p='5px'
              justifyContent='space-around'
             >
              <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/pjimage_34.jpg?size=237:133' 
              
              />
               <Text fontSize='17px' textAlign='center'>Johnny Depp was 'real', Amber Heard cried 'crocodile tears', says juror</Text>
               </Box>
            <Box display="flex"
             flexDirection='column'
            //   border='1px solid'
            //   borderColor='yellow.600'
              w='49%'
              h='100%'
              gap='2%'
              p='5px'
            //   justifyItems='center'
              justifyContent='space-around'
             >
              <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/bjpofficefire_1200x768.jpeg?size=237:133' 
              
              />
               <Text fontSize='17px' textAlign='center'>As Agnipath protests turn violent, 2nd BJP office set afire in Bihar</Text>
               </Box>
               
            </Box>

         </Box>
         {/* second box top stores 2*/}
            <Box display="flex"
             flexDirection='column'
             border='1px solid'
             borderColor='gray.400'
             w="28%"
             h="100%"
             p='5px'
            //  gap='2px'
             justifyContent='space-around'
            >
              <Box  display='flex'
            //    border='1px solid'
            //    borderColor = "gray.400"
               w='100%'
               h="5%"
               p='2px'
              
              >
                <Heading fontSize='17px'>TOP STORIES</Heading>

              </Box >
              <Box   display='flex'
              flexDirection='column'
            //    border='1px solid'
            //    borderColor = "gray.400"
               w='100%'
               h="90%"
               p='10px'
               justifyContent='center'
               overflowY='scroll'
               
              >
                 {data.map((e,index)=>(
                 <Box key={index}
                 borderBottom=" 1px solid"
                 borderColor="gray.400"
                 w='100%'
                 justifyContent='space-around'
                 textAlign="justify"
                 fontSize='14px'
                 >
                  {e.title}
                 </Box>
              ))} 
              </Box>
            </Box>
         {/* second box top stores 2 */}
             {/* Opinion start box */}
            <Box display='flex'
             flexDirection='column'
             border='1px solid'
             borderColor='gray.400'
             w='39%'
             h='100%'
             gap='5px'
             justifyContent='space-around'
             p='10px'
            
            >
             <Box  display='flex'
            //   border='1px solid'
            //   borderColor='gray.400'
              w='100%'
              h='5%'
              p='5px'
             >
                <Heading fontSize='17px'>OPINION</Heading>
             </Box>
             <Box  display="flex"
            //   border='1px solid'
            //   borderColor ="gray.400"
              w='100%'
              h='94%'
              justifyContent='space-around'
              p='10px'
             >
              <HomeSlider/>
             </Box>
                
            </Box>
             {/* Opinion end box */}

          </Box>
         {/* top Stores and opinion box start */}
          {/* visual stories and today special start */}
          {/* <Box dispaly='flex'
           border='2px solid'
           borderColor='red.100'
            w='100%'
            h='50px'
            gap='5px'
            p='5px'
            justifyContent='space-around'
          > 
            <Heading fontSize='17px'>VIUSAL STORIES</Heading>
             <Heading fontSize='17px'>TODAY'S SPECIALS STORIES</Heading>
          </Box> */}
          

            <Box  display="flex"
            //   border='2px solid'
            //   borderColor='red.500'
              w='100%'
              h='400px'
              gap="10px"
              p='15px'
              mt='30px'
              justifyContent='space-around'
            >
              
            {/* visual sotries start */}
              <Box display='flex'
               border='1px solid'
               borderRadius={'10px'}
               borderColor='gray.400'
               w="70%"
               h='100%'
               p='10px'
               gap='5px'
               justifyContent="space-around"
              >
            
               <VisualStories/>
              </Box>
            {/* visual sotries end */}

            {/* today special start */}
             <Box display='flex'
               border='1px solid'
               borderRadius={'10px'}
               borderColor='gray.400'
               w="28%"
               h='100%'
               p='10px'
            //    g='10px'
               justifyContent='space-around'
             >
                 <TodaySpecial/>
             </Box>
            {/* today special end */}

            </Box>
          {/* visual stories and today special end */}
          {/* movies lifestyle and sports start box */}
           <Box>
              <MoviesLifeSports/>
           </Box>
          {/* movies lifestyle and sports end  box */}
          {/* podcasts india box start */}
             <Box>
                <PodCastsIndia/>
             </Box>
          {/* podcasts india box end */}
          {/* From  the magazine start box */}
             <Box>
                 <Magazine/>
             </Box>
          {/* From  the magazine end box */}
          {/* photo and anchor start box */}
            <Box>
                 <PhotoAnchor/>
            </Box>
          {/* photo and anchor end box */}
          {/* science and technology box start */}
            <Box display='flex'
            //   border='2px solid'
            //   borderColor='orange.500'
              w='100%'
              h='700px'
              gap='10px'
              p='10px'
              justifyContent='space-around'
            
            >
             <Science/>
             <Technology/>
             <Programme/>
            </Box>
          {/* science and technology box end */}
          {/* television business news analysis box start */}
           <Box>
              <BusinessTelevision/>
           </Box>
          {/* television business news analysis box end */}
          {/* auto cities education box start */}
            <Box>
                <AutoCities/>
            </Box>
          {/* auto cities education box end */}
          {/* health world india today insight box start */}
            <Box>
                <HealthWorld/>
            </Box>
          {/* health world india today insight box end */}
          {/* law crime box start */}
            <Box>
                <LawCrime/>
            </Box>
          {/* law crime box end */}
          {/* latest from aajtak box start */}
            <Box display='flex'
            //   border='2px solid'
            //   borderColor='orange.400'
              w='100%'
              h='600px'
              p='10px'
              gap='10px'
              justifyContent='space-around'
            
            > 
             <LatestAaj/>
             <LatestDaily/>
             <LatestLotThe/>
            </Box>
          {/* latest from aajtak box end */}
        </Box>
        // last main box side 
    )
}