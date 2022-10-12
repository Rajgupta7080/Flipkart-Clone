import React, { useState } from 'react'
// import ProductItem from './ProductItem'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Checkbox, CheckboxGroup, Flex, HStack, Image, LinkBox, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Square, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, TagCloseButton, TagLabel, Text, useCheckboxGroup, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import ProductItem from './ProductItem'
// import {StarIcon} from '@chakra-ui/icons'
const url = `http://localhost:3005`
const Products = () => {
    const [date, setData] =  useState([]);
    const [page, setPage] = useState(1);
    const perPagelimitProduct = 12;
    const [total, setTotal] = useState(0);
    // console.log(page , " page");
    const [categories, setCategories] = useState("all");

    const [discountFilter, setDiscountFilter] = useState(0);
    const discountFilterurl = discountFilter!==0

    const [priceRange, setPriceRange] = useState([]);
    const priceRangeurl = priceRange[0]>0 || priceRange[1]<100?
    `&new_price_gte=${priceRange[0]*10}${priceRange[1]<100?`&new_price_lte=${priceRange[1]*10}`:""}`:""

    const [sortprice, setPriceSort] = useState("");
    const pricesorturl = sortprice===""?"":`&_sort=new_price&_order=${sortprice}`

    // const [sortRating, setSortRating] = useState("");
    // const ratingsorturl = sortRating===""?"":`&hidden_stars_gte=${sortRating}`


    const { value, getCheckboxProps } = useCheckboxGroup()
    console.log(value, " val of checkbox ");
    

    useEffect(()=>{
        fetchData(categories)
    },[page, sortprice, priceRangeurl, categories])

    const fetchData = (categories="all")=>{
        // const categories = categories
        fetch(`${url}/${categories}?_limit=${perPagelimitProduct}&_page=${page}${pricesorturl}${priceRangeurl}`)
        .then((res)=>{
            const total = res.headers.get('X-Total-Count')
            setTotal(total);
            // console.log(total, " total h");
            return res.json()
        })
        .then((res)=>{
            // console.log(res, " res");
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
    // console.log(value);
    let arrpage = range(page-4,page+6);
    // console.log( arrpage, " page");
    
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
                            
                            <Accordion defaultIndex={[1,2,4,6]} allowMultiple>
                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                            CATEGORIES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']} >
                                        <Stack spacing={[1]} direction={['column']} >
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Appliances' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setCategories("appliances")}>Appliances</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Electronics' })}><Text fontSize={'small'} fontWeight='500' onClick={()=>setCategories("electronics")} >Electronics</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: "Fashion" })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setCategories("fashion")}>Fashion</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Groceries' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setCategories("grocery")}>Groceries</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Mobiles' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setCategories("mobiles")}>Mobiles</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Home' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setCategories("home")}>Home</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'TopOffers' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setCategories("TopOffers")}>TopOffers</Text></Checkbox>
                                            {/* <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Books' })} ><Text fontSize={'small'} fontWeight='500'>Books</Text></Checkbox> */}
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                            GENDER
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']}>
                                        <Stack spacing={[1]} direction={['column']}>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: "Men" })} ><Text fontSize={'small'} fontWeight='500'>Men</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Women' })} ><Text fontSize={'small'} fontWeight='500'>Women</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Unisex' })} ><Text fontSize={'small'} fontWeight='500'>Unisex</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Boys' })} ><Text fontSize={'small'} fontWeight='500'>Boys</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Girls' })} ><Text fontSize={'small'} fontWeight='500'>Girls</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                            PRICE
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <RangeSlider defaultValue={[0, 100]} 
                                            onChangeEnd={(val) => setPriceRange(val)}>
                                            <RangeSliderTrack>
                                                <RangeSliderFilledTrack bg={'#2874F0'}/>
                                            </RangeSliderTrack>
                                            <RangeSliderThumb index={0} />
                                            <RangeSliderThumb index={1} />
                                        </RangeSlider>
                                        <Flex mt='10px' justify={'space-between'} align='center'>
                                            <Text color={'black'} bg='#fff' border={'0.6px solid #d7d7d7'} borderRadius='2px' p='0px 28px' fontSize={'14px'}>{priceRange[0]>0?priceRange[0]*10:"Min"}</Text>
                                            <Text fontSize={'15px'} >to</Text>
                                            <Text bg='#fff' border={'0.6px solid #d7d7d7'} borderRadius='2px' p='0px 28px' fontSize={'14px'}>{priceRange[1]<100?priceRange[1]*10:"1000+"}</Text>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small'>
                                            BRAND
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']}>
                                        <Stack spacing={[1]} direction={['column']}>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'ADIDAS' })} ><Text fontSize={'small'} fontWeight='500'>ADIDAS</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Allen Solly' })}><Text fontSize={'small'} fontWeight='500'>Allen Solly</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: "Ap'pulse" })} ><Text fontSize={'small'} fontWeight='500'>Ap'pulse</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'BEWAKOOF' })} ><Text fontSize={'small'} fontWeight='500'>BEWAKOOF</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Billion' })} ><Text fontSize={'small'} fontWeight='500'>Billion</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'CHEROKEE' })} ><Text fontSize={'small'} fontWeight='500'>CHEROKEE</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Christy World' })} ><Text fontSize={'small'} fontWeight='500'>Christy World</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Clovia' })} ><Text fontSize={'small'} fontWeight='500'>Clovia</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                        DISCOUNT
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']}>
                                        <Stack spacing={[1]} direction={['column']}>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '30% or more' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setDiscountFilter(30)}>30% or more</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '40% or more' })}><Text fontSize={'small'} fontWeight='500'  onClick={()=>setDiscountFilter(40)}>40% or more</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: "50% or more" })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setDiscountFilter(50)}>50% or more</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '60% or more' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setDiscountFilter(60)}>60% or more</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '70% or more' })} ><Text fontSize={'small'} fontWeight='500' onClick={()=>setDiscountFilter(70)}>70% or more</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                        CUSTOMER RATINGS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']}>
                                        <Stack spacing={[1]} direction={['column']}>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '4★ & above' })} ><Text fontSize={'small'} fontWeight='500'>4★ & above</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '3★ & above' })}><Text fontSize={'small'} fontWeight='500'>3★ & above</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                        COLOR
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']}>
                                        <Stack spacing={[1]} direction={['column']}>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'White' })} ><Text fontSize={'small'} fontWeight='500'>White</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Black' })}><Text fontSize={'small'} fontWeight='500'>Black</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: "Yellow" })} ><Text fontSize={'small'} fontWeight='500'>Yellow</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Red' })} ><Text fontSize={'small'} fontWeight='500'>Red</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Blue' })} ><Text fontSize={'small'} fontWeight='500'>Blue</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Pink' })} ><Text fontSize={'small'} fontWeight='500'>Pink</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                        OFFERS
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']}>
                                        <Stack spacing={[1]} direction={['column']}>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Buy More, Save More' })} ><Text fontSize={'small'} fontWeight='500'>Buy More, Save More</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'No Cost EMI' })}><Text fontSize={'small'} fontWeight='500'>No Cost EMI</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: "Special Price" })} ><Text fontSize={'small'} fontWeight='500'>Special Price</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                                {/* <AccordionItem p={'5px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1'  textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                                            CATEGORIES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <CheckboxGroup  defaultValue={['']}>
                                        <Stack spacing={[1]} direction={['column']}>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '' })} ><Text fontSize={'small'} fontWeight='500'></Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: '' })}><Text fontSize={'small'} fontWeight='500'></Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: "Men" })} ><Text fontSize={'small'} fontWeight='500'>Men</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Women' })} ><Text fontSize={'small'} fontWeight='500'>Women</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Baby' })} ><Text fontSize={'small'} fontWeight='500'>Baby</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Home' })} ><Text fontSize={'small'} fontWeight='500'>Home</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Sports' })} ><Text fontSize={'small'} fontWeight='500'>Sports</Text></Checkbox>
                                            <Checkbox spacing='0.8rem' {...getCheckboxProps({ value: 'Books' })} ><Text fontSize={'small'} fontWeight='500'>Books</Text></Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem> */}

                            </Accordion>
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
                            <Text color={'#878787'}><b>T-shirts</b> have become one of the most common yet stylish choices of clothing for teenagers. As tees are simple to wear, comfortable, and easy to wash, they have become a popular option. You can pair a tee with pants, like chinos, track pants, joggers, jeans, shorts, etc. Wearing appropriate accessories with a half sleeve tee will certainly amp up your style factor. Pick a polo tee with striped details and stylise with a leather strap watch for the best results. You can even find polo tees with solid colours or prints online. Choose boxy, loose, or regular fit tees to stay comfortable during summer, or choose hooded long-sleeve options to stay trendy during winters. You can even choose your preferred sleeve length while shopping online. Explore tees with exciting prints that would certainly impress your peers. Finding a size that would fit you won’t be a hassle online as there are plenty of size options available. Find brands like Adidas, Adrenex, Billion, Nike, Reebok, and many more while shopping for the best t-shirts online. You do not have to get up from your couch to order a t-shirt for yourself. Get them delivered to a preferred location without any hassles. The information you are reading has been last updated on 09-Oct-22</Text>
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
                                date.map((property, i)=>(
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
                        {/* <Flex gap={3} p='4px 0px' textAlign={'center'} justify='center' align={'center'} 
                                color={'#212121'} fontWeight={'600'}>
                            {[1,2,3,4,5,6,7,8,9,10,"NEXT"].map((item, i)=>{
                                return <Text key={i} display={'inline-block'} cursor='pointer' fontSize={'15px'}
                                            height={'32px'} minW='32px' borderRadius={'50%'}
                                            _selected={{bg:'#2874f0', color:'#fff'}}
                                        > {item} </Text>
                            })}
                        </Flex> */}
                        <Tabs>
                            <TabList borderBottom={0}>
                                {/* {Array.from({length: total/10}, (v, i) => i).map((item, i)=>{
                                    return <Tab key={i} cursor='pointer'
                                                _selected={{bg:'#2874f0', color:'#fff'}}
                                                height={'32px'} w='32px' borderRadius={'50%'}
                                                onClick={()=>setPage(item+1)}
                                                >
                                                {item+1}
                                            </Tab>
                                })} */}
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
                                {/* {
                                    arrpage.map((ele,i)=>(
                                        <Tab key={i} cursor='pointer'
                                                // _selected={{bg:'#2874f0', color:'#fff'}}
                                                height={'32px'} w='32px' borderRadius={'50%'}
                                                onClick={()=>setPage(ele)}
                                                >
                                                {ele}
                                            </Tab>
                                    ))
                                } */}
                                
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
            {/* <Box border={'1px solid teal'} m={'50px'}>
                footer
            </Box> */}
        </Box>
    )
}

export default Products
