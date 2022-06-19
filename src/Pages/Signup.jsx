
import { Box, Button, Checkbox, Divider, Heading, Input,Stack } from "@chakra-ui/react";
import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import{FaFacebookSquare} from "react-icons/fa"

import{FaTwitter} from "react-icons/fa"
import{FaGoogle} from "react-icons/fa"


export const SignUp = () =>{
    const [signup,setSignup] = useState(
        {
            email: "",
            password: "",
        }
       )
    
       const hanldeChange = (e) => {
        const { name, value } = e.target;
        setSignup({
          ...signup,
          [name]: value,
        });
      };
    
     const handleSubmit = (e)=>{
        e.preventDefault()
     }
    return (
        <Box  display ='flex'
        flexDirection='column'
       //   border = '2px solid'
       //   borderColor="gray.400"
         w='70%'
         h='600px'
         p='10px'
         gap='10px'
         m='auto'
         mt='20px'
         justifyContent='space-around'
       >
          
            {/* second box start */}
              <Box  display='flex'
               //  border='1px solid'
               //  borderColor='orange.300'
                w='100%'
                h='5%'
                p='10px'
                justifyContent='space-around'
                alignItems='center'
              >
               <Divider w='40%'/>
               <Heading fontSize='20px' color='gray.400'>
               Sign Up 
               </Heading>
               <Divider w='40%'/>
              </Box>
            {/* second box end */}
            {/* third box start */}
               <Box display='flex'
               //  border='1px solid'
               //  borderColor='telegram.300'
                w='100%'
                h='8%'
                p='15px'
               //  pb='25px'
                justifyContent='space-around'
               >
                 <Stack direction='row' spacing={4}>
                   <Button w='150px' leftIcon={<FaTwitter variant='outLine' fontSize='30px' bg='cyan.400' color="white" />} colorScheme='cyan' variant='solid' color='white'>
                       Tiwtter
                   </Button>
                   <Button w='150px' leftIcon={<FaFacebookSquare fontSize='30px' bg='blue.400'/>} colorScheme='blue' variant='solid'>
                     Facebook
                   </Button>
                   <Button w='150px' leftIcon={<FaGoogle fontSize='30px' bg='gray.400'/>} colorScheme='gray' variant='solid' color='gray.400'>
                     Google
                   </Button>
                  </Stack>
               </Box>
            {/* third box end */}
            <Box  display='flex'
               //  border='1px solid'
               //  borderColor='orange.300'
                w='100%'
                h='5%'
                p='10px'
                justifyContent='space-around'
                alignItems='center'
              >
               <Divider w='20%'/>
               <Heading fontSize='20px' color='gray.400'>
               Or Sign In using your Email or Mobile no.
               </Heading>
               <Divider w='20%'/>
              </Box>
            {/* from input start */}
              <Box display='flex'
               flexDirection='column'
               //  border='1px solid'
               //  borderColor='red.400'
                w='50%'
                h='60%'
                p='10px'
                m='auto'
                justifyContent='space-around'
               //  alignItems='center'
              >
                <form  onSubmit={handleSubmit}>
                <Box dispaly='flex'
                  flexDirection='column'
                  w='100%'
                  h='100%'
                  p='10px'
                  gap='10px'
                  justifyContent='space-around'
                
                >
                <Box dispaly='flex'
                //   flexDirection='column'
                  w='100%'
                  h='30%'
                  p='10px'
                  gap='10px'
                  justifyContent='space-around'
                    
                >
                        <Input type='text' name='country' placeholder="Enter your Country"/>
                        <Input type='text' name='name' placeholder="Enter full name"/>

                </Box>
                <Box dispaly='flex'
                //   flexDirection='column'
                  w='100%'
                  h='30%'
                  p='10px'
                  gap='10px'
                  justifyContent='space-around'
                
                >
                    <Input type='email' name='email' placeholder="Enter your email" value={signup.email}
                      onChange={hanldeChange}
                    />
                    <Input type='password' name='password' placeholder="Enter password"
                    value={signup.password}
                    onChange={hanldeChange}
                    />

                </Box>
                   

                 
                      <Box display='flex'
                         w='100%'
                         h='5%'
                         p='2px'
                         mt='10px'
                         gap='15px'
                         justifyContent='space-between'
                       >
                       {/* <Checkbox>I agree to the SSO login privacy terms and I warrant that I am above 16 years of age. *</Checkbox> */}
                       {/* <Checkbox>
                       I agree to the processing of my personal information for profiling such as My Credits, Follow activity , Personalised recommendations and Advertisements.
                        </Checkbox>
                       <Checkbox>
                           I wish to receive custom communications i.e. Emails, newsletters, SMS, notifications from India Today based on my interests and my activities on the website
                        </Checkbox> */}
                        
                      </Box>
                      <Box isplay='flex'
                         w='100%'
                         h='5%'
                         p='2px'
                         justifyContent='center'
                      
                      >
                      <Button type='submit' colorScheme='blue' w='150px'  
                      
                      >Sign Up</Button>
                      </Box>
                    
                  </Box>
                </form>
              </Box>
            {/* from input end */}
       </Box>
    )
}