import { Box,  Icon, Image, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import {HamburgerIcon, Search2Icon} from "@chakra-ui/icons"
import {BsPerson} from "react-icons/bs"
import {FaBtc} from "react-icons/fa"
import {BiTv} from "react-icons/bi"
import {AiOutlineShareAlt} from "react-icons/ai"
import React from "react";
const upperNavbarHeading= ["India Today","Malayalam","Business Today",  "DayilO","Aaj Tak","Lallantop","Bangla"
   ,"GNTTV","iChowk","Reader's Digest"
]
// const middleNavbar = ["NEWS","LIVE TV",
// "https://imgs.search.brave.com/f4dLm-qzZcb0DcpJ-6l2GOqjmgAfzGa6gAc0b_JZHEM/rs:fit:300:161:1/g:ce/aHR0cHM6Ly9kdWtl/c2luZGlhLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/Mi9pbmRpYS10b2Rh/eS1sb2dvLnBuZw",
// "APP",
// "MAGAZINE"
// ]
export const Navbar = ()=>{


    return (
        <Box 
         display="flex" 
         border='2px solid'
         borderColor="#E2E8F0"
         w='100%'
         h='200px'
         gap="20px"
         flexDirection="column"
         >
            <Box display="flex" 
            borderBottom='1px solid'
            borderColor="#CBD5E0"
            w='100%'
            h='60px'
            justifyContent='space-around'
            p='10px'
             
            >
               {upperNavbarHeading.map((heading,index)=>(
                <Text color={index ? "#A0AEC0" :0} fontSize='15px' key={index}>{heading}</Text>
               ))}
            </Box>
            <Box display="flex" 
            //  border='2px solid'
            //  borderColor="#E2E8F0"
             w='60%'
             h='60px'
             p='10px'
             justifyContent='space-around'
             m="auto"

            >
               {/* {middleNavbar.map((mid,index)=>(
                 index ? 2 ?<Image key={index} src={mid}/> :"" :<Text key={index}>{mid}</Text>
               ))} */}
               <Text>NEWS</Text>
               <Text>LIVE TV</Text>
               <Image 
                src="https://imgs.search.brave.com/f4dLm-qzZcb0DcpJ-6l2GOqjmgAfzGa6gAc0b_JZHEM/rs:fit:300:161:1/g:ce/aHR0cHM6Ly9kdWtl/c2luZGlhLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/Mi9pbmRpYS10b2Rh/eS1sb2dvLnBuZw"
                //  boxSize='100px'
                // boxSize='110px'
                // objectFit='cover'
               />
               <Text>APP</Text>
               <Text>MAGAZINE</Text>
            </Box>
            <Box display="flex" 
            //    border='2px solid'
            //    borderColor="#E2E8F0"
               color='white'
               bg='#C53030'
              w='100%'
              h='60px'
              gap='10px'
              p='5px'
              justifyContent="space-around"
            >
                <Box  display="flex" 
                //  border='2px solid'
                //  borderColor="#E2E8F0"
                 w='60%'
                 h='100%'
                 p='8px'
                 justifyContent='space-evenly'
                >
                 <Link to="" >HOME</Link>
                 <Link to="/myFeed">MY FEED</Link>
                 <Link to="/india">INDIA</Link>
                 <Link  to='/world'>WORLD</Link>
                 <Link to='/business'>BUSINEES</Link>
                 <Link to='/tech'>TECH</Link>
                 <Link to="/movies">MOVIES</Link>
                 <Link to="/sports">SPORTS</Link>
                 <Link  to='/science'>SCIENCE</Link>
                 <Link to='/boardResult'>BOARD RESULTS 2022</Link>
                </Box>
                <Box  display="flex" 
                //  border='2px solid'
                // borderColor="#E2E8F0"
                w='30%'
                h='100%'
                p='8px'
                justifyContent='space-around'
                >
                 <HamburgerIcon fontSize='20px'/>
                 <Icon as={FaBtc}fontSize='20px' />
                  <Icon as={BiTv} fontSize='20px'/>
                 <Icon as={AiOutlineShareAlt} fontSize='20px'></Icon>
                 <Icon as={Search2Icon} fontSize='20px'/>
                 {/* <Button colorScheme='black' variant='ghost'>
                 <Icon as={BsPerson} fontSize='20px'/>
                 </Button> */}
                 <Link to='/login'><Icon as={BsPerson} fontSize='20px'/></Link>
                 

                </Box>

            </Box>
        </Box>
    )
}