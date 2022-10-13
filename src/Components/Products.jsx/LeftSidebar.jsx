import { Box, Tag, TagCloseButton, TagLabel, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter/AllFilter'

const LeftSidebar = (props) => {
    const {value, getCheckboxProps, setPriceRange, priceRange} = props;
    return (
        <Box w={"17rem"} bg='#fff' flexDirection='0 0 280px'>
                        <VStack boxShadow={'6px 1px 8px 0 rgb(0 0 0 / 6%)'}
                            align='stretch'
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
                            <Filter getCheckboxProps={getCheckboxProps} 
                                    setPriceRange={setPriceRange} 
                                    priceRange={priceRange}
                                />
                        </VStack>
                    </Box>
    )
}

export default LeftSidebar