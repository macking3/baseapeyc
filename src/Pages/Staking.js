import React, {useState, useEffect} from 'react';


import { ethers } from 'ethers';
import { useAccount } from 'wagmi';

import BaycStaking from '../artifacts/contracts/BaycStaking.sol/BaycStaking.json';
import BaseApeNFTToken from '../artifacts/contracts/BaseApeToken.sol/BaseApeToken.json';
import { Box, Button, Card, CardBody, CardHeader, Flex, Grid, Text } from '@chakra-ui/react';
import UnstakedNFT from 'Components/UnstakedNFT';
import StakedNFT from 'Components/StakedNFT';


const tokenContractAddress = '0xe500F2CCCa2712374056033042Bdd3be5A81D6e8';
const stakingContractAddress = '0xc9ddE63BCd4242c05e17e7d6662eB86b682ad751';

const Staking = () => {

    const { address, isConnecting, isDisconnected} = useAccount();
    const [ownerTokenStakedId, setOwnerTokenStakedId] = useState([]);
    const [rewardsAmount, setRewardsAmount] = useState(0);
    const [balance, setBalance] = useState(0);


    useEffect(() => {
      fetchStakingData();
      fetchTokenData();
      updateData();
    }, [address])

    const updateData = () => {
      if(isDisconnected) {
      setOwnerTokenStakedId([]);
      setRewardsAmount(0);
      setBalance(0);
      }
    }

    async function fetchStakingData() {
      if(typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(stakingContractAddress, BaycStaking.abi, provider);
        try {
          if(address) {
            const tokensId = await contract.tokenStakedByOwner(address);
            let ownerTokenStakedId = [];
              tokensId.map((tokenId) => (
                  ownerTokenStakedId.push(parseInt(tokenId._hex))
              ))
            
              setOwnerTokenStakedId(ownerTokenStakedId);

              const rewardsAmount = await contract.getRewardsAmount(address, ownerTokenStakedId); 
              setRewardsAmount((parseInt(rewardsAmount._hex) / 10 ** 18).toFixed(2))
          }
        }
        catch (err) {
          console.log(err.message);
        }
      }
  }
   

    async function fetchTokenData() {
        if(typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(tokenContractAddress, BaseApeNFTToken.abi, provider);
          try {
            if(address) {
              const accountBalance = await contract.balanceOf(address);
              setBalance((parseInt(accountBalance._hex) / 10 ** 18).toFixed(2));
            }
          }
          catch (err) {
            console.log(err.message);
          }
        }
    }

    

      async function claim(tokensId) {
        if(typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(stakingContractAddress, BaycStaking.abi, signer);
          try {
            const transaction = await contract.claim(tokensId, { gasLimit: 1 * 10 ** 6 });
            await transaction.wait();
          }
          catch (err) {
            console.log(err.message);
          }
        }
      }


    return (
        <Box mb="100px">
            <Box >
                <Text textAlign="center" fontSize="30px" color="white" fontWeight="bold" mb="25px">Your $BAY tokens</Text>

                <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap="60px">
                    <Card  textAlign="center" border="1px" borderColor="secondary.800" fontSize="25px" fontWeight="bold">
                        <CardHeader fontSize="18px" >
                        <Text color="gray.400">
                            Claimable Rewards
                        </Text>
                        </CardHeader>

                        <CardBody>
                            <Text color="white">
                                {rewardsAmount} $BAY
                            </Text>
                        </CardBody>
                    </Card>

                    <Card  textAlign="center" border="1px" borderColor="secondary.800" fontSize="25px" fontWeight="bold">
                        <CardHeader fontSize="18px" >
                        <Text color="gray.400">
                            Current Balance
                        </Text>
                        </CardHeader>

                        <CardBody>
                            <Text color="white">
                                {balance} $BAY
                            </Text>
                        </CardBody>
                    </Card>

                </Grid>

                <Box textAlign="center" mt="25px" >
                    <Button colorScheme="pink" borderRadius="full" w={{base: "100%", md:"25%"}} fontSize="25px" py="7" onClick={() => claim(ownerTokenStakedId)} disabled={isDisconnected && true}>
                        Claim reward
                    </Button>
                </Box>
                
            </Box>

            <Box>
                <Text textAlign="center" fontSize="30px" color="white" fontWeight="bold" my="35px">Your NFTs</Text>

                <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}} gap="60px">

                        <StakedNFT ownerTokenStakedId={ownerTokenStakedId}/>
                        <UnstakedNFT/>

                </Grid>
            </Box>
        </Box>
    );
};

export default Staking;