import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { GrTwitter, GrDesktop } from 'react-icons/gr';


const Footer = () => {
    return (
        <footer>
            <Flex my="50px"  align="center" justify="center" fontSize="25px" gap="5px" >
                <Box color="twitter.600" mt="2px"><GrTwitter/></Box>
                <Link color="white" href='https://twitter.com/BaseApeYatclub' target={'_blank'}>Twitter</Link>
            </Flex>
              <Flex my="50px"  align="center" justify="center" fontSize="25px" gap="5px" >
                <Box color="discord.600" mt="2px"><GrDesktop/></Box>
                <Link color="white" href='https://discord.gg/tmBfEZwY' target={'_blank'}>Discord</Link>
            </Flex>
        </footer>
    );
};

export default Footer;