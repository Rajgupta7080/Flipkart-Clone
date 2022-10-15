import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import "./navbar.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { InputRightElement } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import vikas from './Icon/icon1.svg';
import url1 from "./Icon/coin1.webp";
import coin2 from "./Icon/coin2.webp";
import icon3 from "./Icon/icon3.webp";
import icon4 from "./Icon/icon4.webp";
import icon5 from "./Icon/icon5.webp";
import icon6 from "./Icon/icon6.webp";
import icon7 from "./Icon/icon7.webp";
import icon8 from "./Icon/icon8.webp";
import icon9 from "./Icon/icon9.webp";
import icon10 from "./Icon/icon10.webp";
import icon11 from "./Icon/icon11.webp";
import icon12 from "./Icon/icon12.webp";
import icon13 from "./Icon/icon13.webp";
import icon14 from "./Icon/icon14.webp";
import icon15 from "./Icon/icon15.png";

import { Flex, Box, Center, Link, Image, Spacer, InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { BsFillFilePlusFill, BsFillCreditCard2BackFill, BsBellFill, BsQuestionSquareFill } from "react-icons/bs";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { RiInboxUnarchiveFill, RiCoupon3Fill } from "react-icons/ri"
import { AiFillHeart } from "react-icons/ai"
import { BiTrendingUp } from "react-icons/bi"
import { HiDownload } from "react-icons/hi"
import { useDisclosure } from '@chakra-ui/react';

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { Navigate, NavLink } from "react-router-dom";
import Register from "../Login/Register";
import { Signup } from "../Login/SignUp";

const items = [
  {
    id: 0,
    description: "Cobol"
  },
  {
    id: 1,
    description: "JavaScript"
  },
  {
    id: 2,
    description: "Basic"
  },
  {
    id: 3,
    description: "PHP"
  },
  {
    id: 4,
    description: "Java"
  }
];




const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  const [isLargerThan670] = useMediaQuery('(min-width: 730px)')
  // const url = `http://localhost:4000/all?description=${searchVal}`

  const [data, setData] = useState([])
  // const [searchVal, setSearchVal] = useState("");
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=()=>{
    fetch(`http://localhost:4000/mobile`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res)
      console.log(res, " search input data after fetched ");
    })
  }

  // const handleinput = (e)=>{
  //   const val = e.target.value
  //   console.log(val, " input box ");
  //   setSearchVal(val)
  // }

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    
    console.log(string, results," on search ");
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result ," on hover ");
  };

  const handleOnSelect = (item) => {
    // the item selected
    // <Navigate to={`/products/${item.item_id}`}/>
    console.log(item, " selected ");
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  const handleclick =(item)=>{
    console.log(item, " after click ");
  }
  const formatResult = (item) => {
    return (
      // <NavLink>
        <Box onClick={()=>{
          handleclick(item)
        }}>
          {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {""}</span> */}
          <Box h='50px' style={{ display: 'block', textAlign: 'left' }}>name: {item.description}</Box>
        </Box>
      // </NavLink>
    )
  };

  if (isLargerThan670) {
    return (
      <div>
        <Flex bg="#2874f0" h="56px" align="center">
          <Spacer />

          <Box>
            <NavLink to='/'>
            <Box mr="10px" cursor={'pointer'} >
              <Image
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipkart"
                h="20px"
                marginBottom="-5px"
              />
              <Flex alignItems='center' >
                <Text className="explore" color="white">
                  Explore
                </Text>
                <Text className="explore1" color="yellow.400">
                  Plus
                </Text>
                <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px' />
              </Flex>
            </Box>
            </NavLink>
          </Box>
          {/* =======search======== */}
          <Box w="28%">
            <InputGroup>
              {/* <Input
                placeholder="Search for products,brands and more"
                bg="white"
                w="100%"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                onInput={handleinput}
              /> */}
              <Box w={'100%'} pos='relative' zIndex='10'>
                <ReactSearchAutocomplete
                    styling={{
                      borderRadius: "2px",
                      height:"38px",
                      overflowY:'scroll',
                      iconColor: "white",
                      searchIconMargin: "0 0 0 0",
                      // border: '1px solid red'
                    }}
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    placeholder="Search for products,brands and more"
                    formatResult={formatResult}
                    fuseOptions={{ 
                      keys: ["item_id", "description"] 
                    }}
                    // resultStringKeyName={"sy"+Date.now()+Math.random()}
                  />
              </Box>
              <InputRightElement
                children={
                  <IoSearchSharp
                    color="#2874f0"
                    cursor="pointer"
                    fontSize="23px"
                    fontWeight="bold"
                  />
                }
              />
            </InputGroup>
            
          </Box>
          {/* ======================================search end======================================= */}
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box
                bg="white"
                // h="31px"
                // w="9.5%"
                // p='0px 20px'
                textAlign="center"
                fontWeight="700"
                fontSize={'15px'}
                color="#2874f0"
                ml="19px"
                // pt="2px"
                borderRadius="2px"
                cursor="pointer"
                border={'1px solid #dbdbdb'}
              >
                <Register/>
              </Box>
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              bg="white"
              color="white"
              w="250px"
              borderRadius="2px"
              mt="5px"
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade' >
                <Flex h="56px" justifyContent="space-between">
                  <Center fontWeight="600" fontSize='14px'>New Customer?</Center>
                  <Center>
                    <Link color="#2874f0" fontSize='14px'>
                    {/* Sign Up */}
                    <Signup/>
                    </Link>
                  </Center>
                </Flex>
                <hr margin="0px" />
                <Flex h="49px" fontSize='14px' className="pop1">
                  <Center ml='10px'><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Flipkart Plus Zone</Center>
                </Flex>
                <hr />
                <Flex className="pop1" h='49px' fontSize='14px'><Center ml='10px'><Image src={vikas} alt="vikas" /></Center> <Center ml='16px'>Flipkart Plus Zone</Center></Flex>
                <hr />
                <Flex h="49px" fontSize='14px' className="pop1"  > <Center ml='10px'><RiInboxUnarchiveFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>Orders</Center></Flex><hr />
                <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><AiFillHeart color="#2874f0" size="18px" /></Center> <Center ml='16px'> Wishlist</Center></Flex><hr />
                <Flex h="49px" fontSize='14px' className="pop1">  <Center ml='10px'><RiCoupon3Fill color="#2874f0" size="18px" /></Center><Center ml='16px'>Rewards</Center></Flex><hr />
                <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><BsFillCreditCard2BackFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>Gift cards</Center></Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* {=============login end====================} */}
          <Box
            fontSize="16px"
            textAlign="center"
            w="14%"
            color="white"
            fontWeight="600"
            cursor={'pointer'}
          >
            Become a Seller
          </Box>

          {/* ==================================more============= */}
          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box
                fontSize="16px"
                textAlign="center"
                w="7%"
                color="white"
                fontWeight="600"
                cursor={'pointer'}
              >
                <NavLink to='./products'>More</NavLink>
                <ChevronDownIcon
                  _hover={{ transform: "rotate(180deg)" }}
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              bg="white"
              color="white"
              w="250px"
              borderRadius="2px"
              mt="5px"
              h='auto'
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade'>
                <Flex h="49px" fontSize='14px' className="pop1"  > <Center ml='10px'><BsBellFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>Notification Prefernces</Center></Flex> <hr />
                <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><BsQuestionSquareFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>24x7 Customer care</Center></Flex> <hr />
                <Flex h="49px" fontSize='14px' className="pop1">  <Center ml='10px'><BiTrendingUp color="#2874f0" size="18px" /></Center><Center ml='16px'>Advertize</Center></Flex><hr />
                <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><HiDownload color="#2874f0" size="18px" /></Center> <Center ml='16px'>Download app</Center></Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* ===============================more end============= */}

          <NavLink to='./cart'>
            <Flex align={'center'} justify='' cursor={'pointer'}>
              <Icon as={FaShoppingCart} w={5} h={5} color="white" ml="2%" mr="-5px" />
              <Box
                fontSize="17px"
                ml="10px"
                textAlign="center"
                color="white"
                fontWeight="600"
              >
                Cart
              </Box>
            </Flex>
          </NavLink>

          <Spacer />
        </Flex>
      </div>
    );
  }

  else {

    return (<Box>
      <Flex bg="#2874f0" h='52px'>
        <Center ml='10px' ref={btnRef} color='white' onClick={onOpen}>
          <HamburgerIcon color='white' fontSize='20px' />
        </Center>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            className="drawercontent">

            <DrawerHeader bg='#2874f0' color='white' h='40px' className="head"> <Center><FaUser pr='10px' fontSize='15px' /> &nbsp; Login & Signup</Center> <Center><Image src={icon15} w='20px' h='20px' /></Center></DrawerHeader>

            <DrawerBody ml='-5px'>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={coin2} alt="c" w='15px' /></Center> <Center className="drawer" ml='16px'>SuperCoin Zone</Center></Flex>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon3} w="15px" /></Center> <Center className="drawer" ml='16px'>Flipkart Plus Zone</Center></Flex><hr />
              <Flex h="38px" fontSize='14px' > <Center ><Image src={url1} w='15px' /></Center> <Center className="drawer" ml='16px'> All Categories</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon4} w='15px' /></Center><Center className="drawer" ml='16px'>Trending Stores</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon5} w='15px' /></Center> <Center className="drawer" ml='16px'>More on Flipkart</Center></Flex><hr />
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon6} w='15px' /></Center> <Center className="drawer" ml='16px'>Choose Language</Center></Flex><hr />
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon7} w='15px' /></Center> <Center className="drawer" ml='16px'> Offer Zone</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon8} w='15px' /></Center><Center className="drawer" ml='16px'>Sell on Flipkart</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon9} w='15px' /></Center> <Center className="drawer" ml='16px'>My Orders</Center></Flex>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon10} w='15px' /></Center> <Center className="drawer" ml='16px'>Coupons</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon11} w='15px' /></Center> <Center className="drawer" ml='16px'> My Cart</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon12} w='15px' /></Center><Center className="drawer" ml='16px'>My Wishlist</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon13} w='15px' /></Center> <Center className="drawer" ml='16px'>My Account</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon14} w='15px' /></Center> <Center className="drawer" ml='16px'>My Notification</Center></Flex><hr />
              <Flex h="38px" fontSize='14px' > <Center className="drawer">Notification Preferences</Center></Flex>
              <Flex h="38px" fontSize='14px' >  <Center className="drawer" >Help Center</Center></Flex>
              <Flex h="38px" fontSize='14px' >  <Center className="drawer" >Legal</Center></Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Center ml='10px' mt='5px'>
          <Box  >
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart"
              h="16px"
              marginBottom="-3px"
            />
            <Flex alignItems='center' >

              <Link className="explore3" color="white">
                Explore
              </Link>
              <Link className="explore4" color="yellow.400">
                Plus
              </Link>
              <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px' />
            </Flex>
          </Box>
        </Center>
        <Spacer />
        <Center w='45px'><BsFillFilePlusFill color='white' /></Center>
        <Center w='45px'><FaShoppingCart color='white' /></Center>
        <Center color='white' mr='10px'>Login</Center>
      </Flex>
      <Flex bg="#2874f0" h='52px'>
        <Center w='100%' ml='1%' mr='1%'> <InputGroup>
          {/* <Input
            placeholder="Search for products,brands and more"
            bg="white"
            w="100%"
            borderRadius="2px"
            h="36px"
            fontSize="14px"
          /> */}
            <Box w={'100%'} pos='relative' zIndex='10'>
                <ReactSearchAutocomplete
                    styling={{
                      borderRadius: "2px",
                      height:"38px",
                      overflowY:'scroll',
                      iconColor: "white",
                      searchIconMargin: "0 0 0 0",
                      // border: '1px solid red'
                    }}
                    items={data}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    placeholder="Search for products,brands and more"
                    formatResult={formatResult}
                    fuseOptions={{ 
                      keys: ["item_id", "description"] 
                    }}
                    // resultStringKeyName={"sy"+Date.now()+Math.random()}
                  />
              </Box>
          <InputLeftElement
            children={
              <IoSearchSharp
                color="#2874f0"
                cursor="pointer"
                fontSize="23px"
                fontWeight="bold"
              />
            }
          />
        </InputGroup></Center>
      </Flex>
    </Box>)

  }





};
export default Navbar;
