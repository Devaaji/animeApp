import {Avatar, Box, Text, VStack} from 'native-base';
import React from 'react';

const ProfilePage = () => {
  return (
    <Box bg="gray.900" h="full" _text={{color: 'white'}}>
      <Box
        bg={{
          linearGradient: {
            colors: ['black', 'orange.900'],
            start: [0.2, 1.5],
            end: [0, 0],
          },
        }}
        p="10"
        position="relative"
        alignItems="center"
        h="180">
        <Avatar
          position="absolute"
          bottom={-50}
          size="108px"
          source={{
            uri: 'https://i.pinimg.com/736x/05/82/f9/0582f99d956f5b00a76167b829b96556.jpg',
          }}
        />
      </Box>
      <Box mt="20" p="2">
        <VStack>
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize="xl">
            Deva Aji Saputra
          </Text>
          <Text textAlign="center" fontSize="md" color="orange.400">
            https://devaajisaputra.com/
          </Text>
          <Text textAlign="center" fontSize="md" color="white">
            @devaajisaputra
          </Text>
        </VStack>
      </Box>
      <Box p="6">
        <VStack>
          <Text
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize="xl">
            Create API JIKAN v4
          </Text>
          <Text textAlign="center" fontSize="md" color="white">
            Thanks for see my profile. If you want to collaborate, please chat
            with me, I'm happy to answer :)
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProfilePage;
