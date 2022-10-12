import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import React from 'react'

const ProductItem = ({ property, i }) => {
    // const property = {
    //     imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    // }

    return (
        <Box key={i}>
            <Box overflow='hidden' m={'0px 8px'} pos={'relative'}
                _hover={{ boxShadow: "0 3px 16px 0 rgb(0 0 0 / 11%)" }}
                transition='box-shadow .2s ease-in-out;'
                h={'100%'}
            // display={'flex'} flexDir='column' alignItems={'center'} justifyContent='center'
            >

                {/* imgage link box  */}
                <Flex position={'relative'} display='block' justifyContent={'center'} alignItems='center' mb={'5px'} cursor='pointer'>
                    {/* imgage box  */}
                    <Box >
                        <Box>
                            <Box w={'100%'} minH='330px' pos={''}
                                pt='%' display={'flex'} justifyContent='center' alignItems={'center'}
                            >
                                <Flex pos={''} top='0' left={'0'} w={'100%'} overflow='hidden'
                                    align={'center'} justify='center'
                                >
                                    <Image pos={'relative'} top='0' left='0' buttom='0' right='0'
                                        maxW='100%' maxH={'100%'}
                                        transition='opacity .5s linear' opacity={'1'} m={'auto'} pl='30px' pr={'30px'} zIndex='0'
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
                <Box bg={'#fff'} p='5px 16px 8px' pos={'relative'} zIndex='2' >
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
                    <Flex mt={3}>{property.category_id}</Flex>
                </Box>
                {/* </Box> */}
            </Box>
        </Box>
    )
}

export default ProductItem