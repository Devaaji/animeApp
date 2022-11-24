import React from 'react';

import {
  Box,
  Flex,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useStoreAnime from '../store/useStoreAnime';

const AnimePages = ({navigation}) => {
  const currentFavorit = useStoreAnime(state => state.currentFavorit);

  if (!currentFavorit) {
    return (
      <Box h="full" bg="gray.900" _text={{color: 'white'}}>
        <Box>
          <Text color="white" textAlign="center" p="10">
            Favorite Not Found!
          </Text>
        </Box>
      </Box>
    );
  }
  return (
    <Box h="full" bg="gray.900">
      <Box mt="4">
        <ScrollView showsVerticalScrollIndicator={true}>
          <>
            {currentFavorit?.map((favorite, i) => (
              <VStack mt="1" key={i}>
                <Pressable
                  onPress={() =>
                    navigation.push('Detail', {
                      itemId: favorite.id,
                    })
                  }>
                  <Flex direction="row" bg="gray.800" p="2">
                    <Box mr="2" w="95" rounded="md" h="120" overflow="hidden">
                      <Image
                        source={{
                          uri: favorite.img,
                        }}
                        w="full"
                        h="full"
                        alt="Search Images Animes depdep"
                        resizeMode="cover"
                      />
                    </Box>
                    <Box flex={1} position="relative">
                      <VStack>
                        <Box>
                          <Text
                            color="white"
                            fontWeight="bold"
                            isTruncated="true">
                            {favorite.title}
                          </Text>
                        </Box>
                        <HStack mt="1" space={2}>
                          <HStack>
                            <MaterialIcons
                              name="star-outline"
                              size={20}
                              color="white"
                            />
                            <Text ml="1" color="white">
                              {favorite.score}
                            </Text>
                          </HStack>
                          <HStack>
                            <MaterialIcons
                              name="book"
                              size={20}
                              color="white"
                            />
                            <Text ml="1" color="white">
                              {favorite.source}
                            </Text>
                          </HStack>
                          <HStack>
                            <MaterialIcons
                              name="restore"
                              size={20}
                              color="white"
                            />
                            <Text ml="1" color="white">
                              {favorite.duration}
                            </Text>
                          </HStack>
                        </HStack>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}>
                          <HStack space={2} mt="1">
                            <Text color="white">Genre :</Text>
                            {favorite.genres.map((genre, index) => (
                              <Box
                                key={index}
                                bg="gray.500"
                                px="1"
                                rounded="md">
                                <Text color="white">{genre.name}</Text>
                              </Box>
                            ))}
                          </HStack>
                        </ScrollView>
                      </VStack>
                      <Box position="absolute" bottom={0} right={0}>
                        <Text color="orange.100" fontWeight="semibold">
                          EP {favorite.eps}
                        </Text>
                      </Box>
                    </Box>
                  </Flex>
                </Pressable>
              </VStack>
            ))}
          </>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default AnimePages;
