
import { Box, Button, Checkbox, Divider, Heading, Input, InputGroup, InputLeftAddon, Stack } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import{FaFacebookSquare} from "react-icons/fa"

import{FaTwitter} from "react-icons/fa"
import{FaGoogle} from "react-icons/fa"
import{BsFillKeyFill} from "react-icons/bs"
import { EmailIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../Stores/LoginAuth/login.action.auth";
import { useEffect,useState  } from "react";

export const Login = ()=>{
    const {isAuth} =useSelector((state)=>state.login)
    console.log("auth:",isAuth)
    const dispatch=useDispatch()
    const navigate = useNavigate()
   const [login,setLogin] = useState(
    {
        email: "",
        password: "",
    }
   )

   const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    dispatch(loginApi(login))
    // navigate("/");
  };
  useEffect(()=>{
     if (isAuth){
        navigate("")
     }
     else{
        navigate('/login')
     }
  },[isAuth])
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
            {/* first box start */}
              <Box display='flex'
                flexDirection='column'
                // border='1px solid'
                // borderColor='red.300'
                w='100%'
                h='8%'
                p='10px'
                justifyContent='space-around'
                alignItems='center'
              >
                <Heading fontSize='20px'>Sign In To India Today</Heading>
                <span> Don't have an account? <Link to='/signup' color="red">Sign Up Now{">>"}</Link></span>

              </Box>
            {/* first box end */}
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
                Sign In via
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
                 <Stack spacing={4}>
                    <InputGroup >
                        <InputLeftAddon children={<EmailIcon/>} />
                        <Input type='email' placeholder='enter email' name='email' value={login.email}
                          size='xl'
                          onChange={hanldeChange}
                        />
                    </InputGroup>

                    {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
                    <InputGroup size='sm'>
                        <InputLeftAddon children={<BsFillKeyFill/>} />
                        <Input placeholder='password'
                         type='password'
                         name='password'
                         value={login.password}
                         onChange={hanldeChange}
                        />
                    </InputGroup>
                       <Checkbox>Remember me</Checkbox>
                       <Box display='flex'
                          w='100%'
                          h='5%'
                          p='2px'
                          justifyContent='space-between'
                        >
                         <Link to='/forget'>Forget Password ?</Link>
                         <Link to='/otp'>Login via OTP</Link>
                       </Box>
                       <Box isplay='flex'
                          w='100%'
                          h='5%'
                          p='2px'
                          justifyContent='center'
                       
                       >
                       <Button type='submit' colorScheme='blue' w='150px'  
                       
                       >Login</Button>
                       </Box>
                     
                   </Stack>
                 </form>
               </Box>
             {/* from input end */}
        </Box>
    )
}