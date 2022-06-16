import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon,  SimpleGrid, Stack, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

import { BsTwitter } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { BiTv} from "react-icons/bi";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebook, FaRss } from "react-icons/fa";

export const Footer = ()=>{

    return (
        <Box display='flex' 
        flexDirection='column'
        //  border='2px solid'
        //  borderColor='red.400'
         w='100%'
         h='550px'
         mt='50px'
         color='white'
         bg='RGBA(0, 0, 0, 0.92)'
         justifyContent='space-around'
        >
         <Box display='flex' 
        //  border='1px solid'
        //  borderColor='blue.400'
         w='100%'
         h='50px'
         p='8px'
        //  m='auto'
         gap='30%'
         justifyContent='space-around'
         
         >
         <Box>
         <Heading fontSize='25px'>INDIATODAY.IN</Heading>
         </Box>
         <Box display='flex' 
        //   border='2px solid'
        //   borderColor='blue.400'
          w='35%'
          h='50px'
          p='2px'
         justifyContent='space-around' 
         >
           <Icon as={FaFacebook} fontSize='32px'/>
           <Icon as={BsTwitter} fontSize='32px'/>
           <Icon as={Search2Icon} fontSize='32px'/>
           <Icon as={FaRss} fontSize='32px'/>
           <Icon as={CloseIcon} fontSize='28px'/>
         </Box>
         </Box>
           <Box >
                <Container as={Stack} maxW={'6xl'} py={8}>
                    <SimpleGrid columns={{ base: 2, sm: 4, md: 6 }} spacing={8}>
                        <Stack align={'flex-start'} >
                         <Heading fontSize='15px'>PUBLICATIONS:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>Businees Today</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Cosmopolitan</Text>
                         <Text color='whiteAlpha.500'fontSize='12px' >India Today Hindi</Text>
                         <Text color='whiteAlpha.500' fontSize='12px'>India Today</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Mail Today</Text>
                         <Text  color='whiteAlpha.500'fontSize='12px'>Reader's Digest</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Time</Text>
                        </Stack>

                        <Stack align={'flex-start'} >
                         <Heading fontSize='15px'>TELEVISION:</Heading>
                         <Text color='whiteAlpha.500' fontSize='12px'>Aaj Tak</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Delhi Aaj Tak</Text>
                         <Text color='whiteAlpha.500' fontSize='12px'>Good News Today</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>India Today Tv</Text>
                         <Heading fontSize='15px'>RADIO:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>Isqh FM</Text>
                         <Heading fontSize='15px'>GAMING:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>India Today Gaming</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>World Esports Cup</Text>
                        </Stack>

                        <Stack align={'flex-start'} >
                         <Heading fontSize='15px'>EDUCATION:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>India Today Education</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Vasant Valley</Text>
                         <Text color='whiteAlpha.500'fontSize='12px' >Best College India 2018</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Best Universities India 2018</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Aaj Tak Compaus National</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Aptitude Test</Text>
                         <Heading fontSize='15px'>ONLINE SHOPPING</Heading>
                        </Stack>

                        <Stack align={'flex-start'} >
                         <Heading fontSize='15px'>EVENTS:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>Agenda Aaj Tak</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>India Today Conclave</Text>
                         <Text  color='whiteAlpha.500'fontSize='12px'>Robb Report India 2018</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>The Red Lab</Text>
                        </Stack>

                        <Stack align={'flex-start'} >
                         <Heading fontSize='15px'>PRINTING:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>Thomson Press</Text>
                         <Heading fontSize='15px'>WELFARE:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>Care Today</Text>
                         <Heading fontSize='15px'>MUSIC:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>Music Today</Text>
                        </Stack>

                        <Stack align={'flex-start'} >
                         <Heading fontSize='15px'>SYNDICATIONS:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>India Content</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>HeadLines Today</Text>
                         <Heading fontSize='15px'>DISTRIBUTION:</Heading>
                         <Text  color='whiteAlpha.500'fontSize='12px'>Rate Card</Text>
                         <Heading fontSize='15px'>USEFUL LINKS:</Heading>
                         <Text color='whiteAlpha.500'fontSize='12px'>Partners</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Press Relase</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Sitemap</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>News</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Newsletter</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Privacy Policy</Text>
                         <Text color='whiteAlpha.500'fontSize='12px'>Correction policy</Text>
                        </Stack>
                    </SimpleGrid>
                </Container>
           </Box>
           {/* paly store */}
           <Heading fontSize='17px'>Download App</Heading>
           <Box display="flex"
            //  border='1px solid'
            //  borderColor = 'white'
             w='40%'
             h='60px'
             m="auto"
             gap='5%'
             justifyContent='space-around'
           > 
    
	           <Box display="flex"
             border='1px solid'
             borderColor = 'gray.400'
             borderRadius='10px'
             w='30%'
             h='100%'
             m="auto"
             p='10px'
             justifyContent='space-around'
               
               >
                 <Icon as={FaGooglePlay} fontSize='28px'/>
                 <Text>Get it on Google Play</Text>
                 {/* <Text>Google Play</Text> */}
               </Box>
                <Box display="flex"
                border='1px solid'
                borderColor = 'gray.400'
                borderRadius='10px'
                w='30%'
                h='100%'
                m="auto"
                p='10px'
                justifyContent='space-around'
                
                >
                    <Icon as={AiFillApple} fontSize='28px'/>
                 <Text>Aviable on the App Store</Text>

                </Box>
                <Box display="flex"
                border='1px solid'
                borderColor = 'gray.400'
                borderRadius='10px'
                w='30%'
                h='100%'
                m="auto"
                p='10px'
                justifyContent='space-around'
                
                >
                    <Icon as={BiTv} fontSize='28px'/>
                 <Text>Android Smart Tv App</Text>

                </Box>
           </Box>
        </Box>
    )
}


