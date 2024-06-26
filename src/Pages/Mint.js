import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, Heading, HStack, Image, Input, Link, Progress, Stack, Text, useNumberInput } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import img from '../Images/56.gif';

import { useAccount } from 'wagmi';

import { ethers } from 'ethers';
import nftContract from '../artifacts/contracts/BaseApeNFT.sol/BaseApeNFT.json';
import { nftContractAddress } from "../utils/contracts-config";


const Mint = () => {

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 10,
        precision: 0,
    })
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  const value = input.value;
//   console.log(value);

  const { address, isConnecting, isDisconnected} = useAccount();

  const [data, setData] = useState({});
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    getContractOwner();
    fetchData();
  }, [address])

  async function getContractOwner() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(nftContractAddress, nftContract.abi, provider);
      try {
       if(address) {
          const owner = await contract.owner();
          if(owner.toLowerCase() === address.toLowerCase()) {
            setOwner(true);
          } else {
            setOwner(false);
          }
       }
      }
      catch (err) {
        console.log(err.message);
      }
    }
  }

  async function fetchData() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(nftContractAddress, nftContract.abi, provider);
      try {
        const mintPrice = await contract.mintPrice();
        const totalSupply = await contract.totalSupply();
        const object = {"price": String(mintPrice), "totalSupply": String(totalSupply)};
        setData(object);
      }
      catch (err) {
        console.log(err.message);
      }
    }
  }
  

  async function mint() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(nftContractAddress, nftContract.abi, signer);
      try {
        let overrides = {
          from: address,
          value: (data.price * value).toString()
        }
        const transaction = await contract.publicSaleMint(address, value, overrides);
        await transaction.wait();
        fetchData();
      }
      catch (err) {
        console.log(err.message);
        console.log(err.message);
      }
    }
  }

  async function withdraw() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(nftContractAddress, nftContract.abi, signer);
      try {
        const transaction = await contract.releaseAll();
        await transaction.wait();
      }
      catch (err) {
        console.log(err.message);
      }
    }
  }


    return (
        <Box  mb="100px">

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap="60px">
                <Stack order={{base: '2', md:'1'}} spacing="25px" >
                    <Text color="white" fontSize="5xl" fontWeight="bold">
                        BaseApeNFT NFT 猿
                    </Text>

                    <Flex justify="space-between" align="center">
                        <Text fontSize="18px" color="primary.600">
                            TOTAL NFTs: <span style={{fontWeight: 'bold', color: 'white'}}>10000</span>
                        </Text>

                        <Text fontSize="18px" color="primary.600">
                            Mint PRICE: <span style={{fontWeight: 'bold', color: 'white'}}>0.002 ETH</span>
                        </Text>

                    </Flex>

                    <Flex justify="space-between" align="center" wrap='wrap' gap="15px">
                    <Text>
                        Network: <span>Base</span>
                    </Text>

                    <Link href='/airdrop' _hover={{textDecoration: 'none'}} target="_blank">
                        <Button colorScheme="cyan">
                            Claim Airdrop
                        </Button>
                    </Link>

                    </Flex>

                    <Text>
                        The BaseApeNFT are the first Cultural utility apes within the Base network, BaseApeNFT is a character of 10000 algorithmically generated collection. Each item can be staked on the BaseApeNFT vault to receive $BAY Token rewards.
                        
                    </Text>

                    <Link href='https://opensea.io/collection/baseapeyc-collectible' _hover={{textDecoration: 'none'}} target="_blank">
                        <Button colorScheme="facebook" w="100%">
                            View on Opensea
                        </Button>
                    </Link>

                    { owner && (
                        <>
                            <Button onClick={withdraw}>withdraw</Button>
                        </>
                    )
                    }

                </Stack>

                <Stack order={{base: '1', md:'2'}} spacing="25px">
                    <Flex justify="center">
                      <Image src={img} alt="nftImage"borderRadius="md" w={{base: 'auto', lg: "300px"}} h="300px" objectFit="contain"/>
                    </Flex>

                    <Box>
                        <Flex justify="space-between" fontSize="17px">
                            <span>Total minted</span>
                            <Text><span style={{color: 'white', fontWeight: 'bold'}}>{((data.totalSupply/10000)*100).toFixed(0)}%</span> ({data.totalSupply}/10000)</Text>
                        </Flex>
                        <Box mt="5px">
                            <Progress bg="secondary.800" size="md" value={((data.totalSupply/10000)*100).toFixed(0)} colorScheme="pink" borderRadius="full"/>
                        </Box>
                    </Box>

                    <Card bg="secondary.700" color="white">
                        <CardHeader fontSize="18px" display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="15px">
                        <Text >
                            Price: <span style={{fontWeight: 'bold'}}>0.002 ETH</span>
                        </Text>
                        <HStack maxW='320px'>
                            <Button {...dec} colorScheme="cyan">-</Button>
                            <Input {...input}/>
                            <Button {...inc} colorScheme="cyan">+</Button>
                        </HStack>
                        </CardHeader>

                        <CardBody>
                            <Button w="100%" colorScheme="pink" onClick={mint} disabled={isDisconnected && true}>Mint {value}</Button>
                        </CardBody>
                    </Card>
                </Stack>
            </Grid>
        </Box>
    );
};

export default Mint;
