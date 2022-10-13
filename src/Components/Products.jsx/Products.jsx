import React, { useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Checkbox, CheckboxGroup, Flex, HStack, Image, LinkBox, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Square, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, TagCloseButton, TagLabel, Text, useCheckboxGroup, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import ProductItem from './ProductItem'
import Filter from './Filter/AllFilter'

const url = `http://localhost:3005`
const Products = () => {
    const [data, setData] =  useState([]);
    const [page, setPage] = useState(1);
    const perPagelimitProduct = 12;
    const [total, setTotal] = useState(0);
    const [categories, setCategories] = useState("all");

    const [priceRange, setPriceRange] = useState([]);
    const priceRangeurl = priceRange[0]>0 || priceRange[1]<100?
    `&new_price_gte=${priceRange[0]*10}${priceRange[1]<100?`&new_price_lte=${priceRange[1]*10}`:""}`:""

    const [sortprice, setPriceSort] = useState("");
    const pricesorturl = sortprice===""?"":`&_sort=new_price&_order=${sortprice}`

    const { value, getCheckboxProps } = useCheckboxGroup()
    console.log(value, " val of checkbox ");
    console.log(data, " all data");

    useEffect(()=>{
        fetchData(categories)

    },[page, sortprice, priceRangeurl, value])

    const fetchData = ()=>{
        let tempUrl = ""
        const categoryCheckArrurl = ['fashion','mobiles',"top_offers", "grocery", "electronics", "home","appliances"]
        const brandCheckArrurl = [""]
        const discountCheckArrurl = ["30", "40", "50", "60", "70"]
        value.forEach((el)=>{
            if(categoryCheckArrurl.includes(el)){
                tempUrl+=`&category_name=${el}`
            }
            if(el==="3" || el==="4"){
                tempUrl+=`&hidden_stars_gte=${el}`
            }
            if(discountCheckArrurl.includes(el)){
                tempUrl+=`&discount_gte=${el}`
            }
        })

        console.log(tempUrl);
        fetch(`${url}/all?_limit=${perPagelimitProduct}&_page=${page}${pricesorturl}${priceRangeurl}${tempUrl}`)
        .then((res)=>{
            const total = res.headers.get('X-Total-Count')
            setTotal(total);
            return res.json()
        })
        .then((res)=>{
            setData(res)
            // setData(res.attributeOptions[0])
        })
    }

    const handlepagination= (curr)=>{
        if(curr<=Math.ceil(total/perPagelimitProduct)){
            setPage(curr)
        }
    }

    const range = (start, stop) => Array.from({ length: (stop - start)}, (_, i) => start + (i))
    let arrpage = range(page-4,page+6);
    
    return (
        <Box bg='#f1f3f6' border='1px solid #f1f3f6' fontFamily='Roboto,Arial,sans-serif'>
            <Flex spacing='10px' m={'8px'} >
                <Box mr={3}>
                    {/* sidebar */}
                    <Box w={"17rem"} bg='#fff' flexDirection='0 0 280px'>
                    {/* <Box w={"280px"} h='95vh' bg='#fff' boxShadow={'6px 1px 8px 0 rgb(0 0 0 / 6%);'} flexDirection='0 0 280px'> */}
                        <VStack boxShadow={'6px 1px 8px 0 rgb(0 0 0 / 6%)'}
                            // divider={<StackDivider borderColor='gray.200' />}
                            // spacing={4}
                            align='stretch'
                            // border='1px solid red'
                            >
                            <Box pl={'20px'} mt={'10px'} fontWeight='bold' fontSize='large'>
                                Filters
                                <Wrap spacing={1} >
                                {value.map((size, i) => (
                                    <WrapItem  key={i}>
                                    <Tag
                                    padding={'5px 10px 5px 0px'}
                                    size={'sm'}
                                    bg='#e0e0e0'
                                    >
                                    <TagCloseButton mr={1}/>
                                    <TagLabel >{size}</TagLabel>
                                    </Tag>
                                    </WrapItem>
                                ))}
                                </Wrap>
                            </Box>
                            <Filter getCheckboxProps={getCheckboxProps} setPriceRange={setPriceRange} priceRange={priceRange}/>
                            
                        </VStack>
                    </Box>
                </Box>
                <Box w='90vw' bg='#fff'>
                {/* content right side     padding: 12px 16px 0; border-bottom: 1px solid #f0f0f0; */}
                    <Box p={'12px 16px 0'} fontSize={'12px'} borderBottom='1px solid #f0f0f0' >
                        <Box color='#878787'>
                            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                        <Box lineHeight={'1.45'} fontSize={'12px'} p='10px 5px 4px 0'>
                            <Text color={'#878787'}><b>T-shirts</b> have become one of the most common yet stylish choices of clothing for teenagers. As tees are simple to wear, comfortable, and easy to wash, they have become a popular option. You can pair a tee with pants, like chinos, track pants, joggers, jeans, shorts, etc. Wearing appropriate accessories with a half sleeve tee will certainly amp up your style factor. Pick a polo tee with striped details and stylise with a leather strap watch for the best results. You can even find polo tees with solid colours or prints online. Choose boxy, loose, or regular fit tees to stay comfortable during summer, or choose hooded long-sleeve options to stay trendy during winters. You can even choose your preferred sleeve length while shopping online. Explore tees with exciting prints that would certainly impress your peers. Finding a size that would fit you won’t be a hassle online as there are plenty of size options available. Find brands like Adidas, Adrenex, Billion, Nike, Reebok, and many more while shopping for the best t-shirts online. You do not have to get up from your couch to order a t-shirt for yourself. Get them delivered to a preferred location without any hassles. The information you are reading has been last updatad on 09-Oct-22</Text>
                        </Box>
                        <Flex alignItems='center' p='5px 0px 0px 0' gap='2'>
                            <Text fontSize={'16px'} fontWeight={'bold'}>Men's T Shirts</Text>
                            <Text fontSize={'12px'} color={'#878787'}>
                                (Showing {(page*perPagelimitProduct)-(perPagelimitProduct-1)} – {page*perPagelimitProduct}  
                                {" "}products of {total} products)</Text>
                        </Flex>
                        
                        {/* <Box> */}
                            <Tabs>
                                <TabList borderBottom={0}>
                                    <Tab  _selected={{cursor:'text'}} p={'8px 0 4px'} mr={'10px'} fontWeight={'600'} fontSize={'14px'} color='black'>Sort By</Tab>
                                    <Tab _selected={{fontWeight:'600', color:'#2874f0', borderBottom:'2px solid #2874f0'}} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black'>Popularity</Tab>
                                    <Tab _selected={{fontWeight:'600', color:'#2874f0', borderBottom:'2px solid #2874f0'}} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black' onClick={()=>setPriceSort("asc")}>Price - Low to High</Tab>
                                    <Tab _selected={{fontWeight:'600', color:'#2874f0', borderBottom:'2px solid #2874f0'}} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black' onClick={()=>setPriceSort("desc")} >Price - High to Low</Tab>
                                    <Tab _selected={{fontWeight:'600', color:'#2874f0', borderBottom:'2px solid #2874f0'}} p={'8px 0 4px'} m={'0 10px'} fontSize={'14px'} color='black'>Newest First</Tab>
                                </TabList>
                            </Tabs>
                        {/* </Box> */}

                    </Box>
                    <Box mt={0}>
                        <SimpleGrid minChildWidth='220px' spacing='10px' pt={0}>
                            {
                                data.map((property, i)=>(
                                    // <ProductItem key={i}/>
                                    <Box key={i}>
                                        <Box overflow='hidden' m={'0px 8px'} pos={'relative'}
                                            _hover={{ boxShadow:"0 3px 16px 0 rgb(0 0 0 / 11%)"}}
                                            transition= 'box-shadow .2s ease-in-out;' 
                                            h={'100%'}
                                            // display={'flex'} flexDir='column' alignItems={'center'} justifyContent='center'
                                            >
                                                
                                            {/* imgage link box  */}
                                            <Flex position={'relative'} display='block' justifyContent={'center'} alignItems='center' mb={'5px'} cursor='pointer'>
                                                {/* imgage box  */}
                                                <Box >
                                                    <Box>
                                                        <Box w={'100%'} minH='320px' pos={''} 
                                                            pt='' display={'flex'} justifyContent='center' alignItems={'center'}
                                                            >
                                                            <Flex pos={''} top='0' left={'0'} w={'100%'} overflow='hidden'
                                                            align={'center'} justify='center' 
                                                            >
                                                                <Image pos={'relative'} top='0' left='0' buttom='0' right='0'
                                                                        maxW='100%' maxH={'260px'}
                                                                        transition= 'opacity .5s linear' opacity={'1'} m={'auto'} pl='30px' pr={'30px'}
                                                                        src={property.image} 
                                                                        // src={property.imageUrl}
                                                                        alt={'pic'} />
                                                            </Flex>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                                {/* faltu box tha  */}
                                                <Box pos={'absolute'} buttom='4px' opacity={'0'} width='100%' p={'0px 8px'} transition='opacity .2s .35s;'></Box>
                                                {/* whishlist icon */}
                                                <Box pos={'absolute'} display='inline-block' top={'12px'} right='12px' cursor='pointer'>
                                                    <Box pos={'relative'} display='inline-flex' >
                                                        <svg width="28" height="28" viewBox="0 0 20 16">
                                                            <path
                                                            d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
                                                                fill="#000" stroke="#FFF" opacity=".2"
                                                                // fill='#c2c2c2'
                                                                >
                                                            </path>
                                                        </svg>
                                                    </Box>
                                                </Box>
                                            </Flex>

                                            {/* description box  */}
                                            {/* <Box pos={'relative'} border={'1px solid gray'} w='100%' h={'150px'  _hover={{ fontWeight: 'semibold', height:'140px',zIndex:'10' }} transform= "translate3d(0px, -36.5938px, 0px)"}> transition= 'transform .35s cubic-bezier(.17,.67,.21,1),-webkit-transform .35s cubic-bezier(.17,.67,.21,1)' */}
                                                <Box bg={'#fff'} h='130px' p='5px 16px 0px' pos={'relative'} zIndex='10' >
                                                    <Box pos='absolute' zIndex='10' pt={'40px'} _hover={{ fontWeight: '', pt:'0'}} >
                                                        <Box
                                                            // color='gray.500'
                                                            color={'#878787'}
                                                            fontWeight='bold'
                                                            fontSize='14px'
                                                            textAlign={'left'}
                                                            textTransform='uppercase'
                                                            >
                                                            {property.category_name}
                                                        </Box>
                                                        <Box
                                                            fontSize={'14px'}
                                                            fontWeight='500'
                                                            lineHeight='tight'
                                                            noOfLines={1}
                                                            cursor='pointer'
                                                        >
                                                            {property.description}
                                                        </Box>
                                                        <Flex gap={3} mt={1} alignItems='center' cursor='pointer'>
                                                            <Text color={'#212121'} fontWeight={'600'} fontSize='16px'>₹{property.new_price}</Text> 
                                                            <Text textDecoration='line-through'>₹{property.old_price}</Text>
                                                            <Text color={'#388e3c'} fontWeight='bold' fontSize={'13px'}>{property.discount}%off</Text>
                                                        </Flex>
                                                        <Flex mt={3} alignItems='center' gap={2}>
                                                            <Text color={'#878787'} fontWeight={'600'} fontSize='14px'>Size</Text>
                                                            <Text>{property.size}</Text>
                                                        </Flex>
                                                    </Box>
                                                </Box>
                                            {/* </Box> */}
                                        </Box>
                                    </Box>
                                ))
                            }
                        </SimpleGrid>
                    </Box>
                    <Flex borderTop={'1px solid #e0e0e0'} justify='space-between' align={'center'}
                            p='10px' lineHeight={'32px'}>
                        <Text ml={5}>Page {page} of {Math.ceil(total/perPagelimitProduct)}</Text>
                        <Tabs>
                            <TabList borderBottom={0}>
                                {
                                    page>1?<Text>PREV</Text>:""
                                }
                                {
                                    page<=5?
                                    Array.from({length: 10}, (v, i) => i).map((item, i)=>{
                                        return <Tab key={i} cursor='pointer' fontSize={'15px'}
                                                    _selected={{bg:'#2874f0', color:'#fff'}}
                                                    height={'32px'} w='32px' borderRadius={'50%'}
                                                    onClick={()=>setPage(item+1)}
                                                    >
                                                    {item+1}
                                                </Tab>
                                    })
                                    :
                                    arrpage.map((ele,i)=>(
                                        <Tab key={i} cursor='pointer' fontSize={'15px'}
                                                bg={i===4?'#2874f0':"#fff"} color={i===4?'#fff':"black"}
                                                _selected={{bg:'', color:''}}
                                                h={'32px'} w='32px' borderRadius={'50%'}
                                                onClick={()=>handlepagination(ele)}
                                                >
                                                {ele}
                                            </Tab>
                                    ))
                                }
                                <Text>NEXT</Text>
                            </TabList>
                        </Tabs>
                        <Text></Text>
                    </Flex>
                    <Box bg={'#f1f3f6'} p='10px 0'>
                        <Flex gap={5} bg={'#fff'} justify='flex-start' align={'center'}
                                p='10px' lineHeight={'32px'}>
                            <Text ml={5} color={'#212121'} fontWeight={'600'} fontSize='16px'>Did you find what you were looking for?</Text>
                            <Flex gap={3} p='4px 0px' textAlign={'center'} justify='center' align={'center'} 
                                    >
                                <Button bg='#fff' border={'0.6px solid #d7d7d7'} borderRadius='2px' p='6px 28px' fontSize={'14px'}>Yes</Button>
                                <Button bg='#fff' border={'0.6px solid #d7d7d7'} borderRadius='2px' p='6px 28px'fontSize={'14px'}>No</Button>
                            </Flex>
                            <Text></Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Products
