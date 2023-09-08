import { Grid, Button, Link, Stack, Text } from '@chakra-ui/react';

const Airdrop = () => {
    return ( 
             <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap="60px">
                <Stack order={{base: '2', md:'1'}} spacing="25px" >
                    <Text color="white" fontSize="5xl" fontWeight="bold">
                        Register for $BAY Airdrop Whitelist猿
                    </Text>
                     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfR4FWJxI-9gaJLK6k2RMzpTQC03-GKPLbC0jRCwOuBBkULzQ/viewform?embedded=true" width="640" height="1505" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                    <Link href='./airdrop' _hover={{textDecoration: 'none'}} target="_blank">
                        <center><Button colorScheme="cyan">
                           Claim Airdrop
                        </Button>Live Soon....</center>
                    </Link>
                </Stack>
            </Grid>
    );
};

export default Airdrop;