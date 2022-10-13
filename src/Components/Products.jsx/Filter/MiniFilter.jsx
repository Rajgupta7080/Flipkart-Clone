import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const MiniFilter = () => {
    return (
        <div>
            <Flex justify='center' align={'center'}
                    w='50%'
                    p='12px'
                    gap={2}
                    >
                <Image width={'24px'} height='24px' src='https://rukminim1.flixcart.com/www/80/80/promos/10/04/2019/62f36a1e-caf6-4433-a848-2adb7e164a4d.png?q=90'/>
                <Text>Filter</Text>
            </Flex>
        </div>
    )
}

export default MiniFilter