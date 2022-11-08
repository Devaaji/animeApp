import React, {useState} from 'react';
import {HStack, Center, Pressable, Box, Flex, Text} from 'native-base';
import Materialicon from 'react-native-vector-icons/MaterialIcons';

const NavigationBarButton = () => {
  const [selected, setSelected] = useState('Home');

  const NavigationRule = [
    {
      icon: 'home',
      name: 'Homepage',
      active: 1,
      toDirect: 'Home',
    },
    {
      icon: 'ondemand-video',
      name: 'Anime',
      active: 2,
      toDirect: 'Anime',
    },
    {
      icon: 'switch-account',
      name: 'Profile',
      active: 3,
      toDirect: 'Profile',
    },
  ];

  console.log(selected);

  return (
    <Box
      position="absolute"
      safeAreaTop
      bg="black"
      h="65px"
      w="full"
      zIndex={9}
      bottom={0}>
      <Center>
        <HStack h="full" w="full" display="flex" justifyContent="space-around">
          {NavigationRule.map((item, index) => (
            <Flex
              key={index}
              _text={{color: 'white'}}
              w="130"
              alignSelf="center">
              <Pressable onPress={() => setSelected(item.toDirect)}>
                <Flex justifyContent="center">
                  <Box alignSelf="center">
                    <Materialicon
                      name={item.icon}
                      size={25}
                      color={selected === item.toDirect ? 'white' : 'gray'}
                    />
                  </Box>
                  <Text
                    textAlign="center"
                    color={selected === item.toDirect ? 'white' : 'gray.500'}
                    fontSize={10}>
                    {item.name}
                  </Text>
                </Flex>
              </Pressable>
            </Flex>
          ))}
        </HStack>
      </Center>
    </Box>
  );
};

export default NavigationBarButton;
