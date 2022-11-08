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
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useRemoteAllAnime from '../hooks/remote/useRemoteAllAnime';
import LoadingAllAnime from '../utils/Skeleton/LoadingAllAnime';

const AllAnimePage = ({route, navigation}) => {
  const {urlParams} = route.params;

  const {
    data: allDataAnime,
    isSuccess,
    isLoading,
  } = useRemoteAllAnime({
    paramsUrl: urlParams,
  });

  return (
    <Box bg="gray.900" _text={{color: 'white'}} h="full">
      <Box mt="4">
        {isLoading && <LoadingAllAnime />}
        {allDataAnime?.data ? (
          <ScrollView showsVerticalScrollIndicator={true}>
            <>
              {isSuccess &&
                allDataAnime?.data.map((item, index) => (
                  <VStack key={index} mt="1">
                    <Pressable
                      onPress={() =>
                        navigation.push('Detail', {
                          itemId: item.mal_id,
                        })
                      }>
                      <Flex direction="row" bg="gray.800" p="2">
                        <Box
                          mr="2"
                          w="95"
                          rounded="md"
                          h="120"
                          overflow="hidden">
                          <Image
                            source={{
                              uri: item.images.jpg.image_url,
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
                                {item.title}
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
                                  {item.score}
                                </Text>
                              </HStack>
                              <HStack>
                                <MaterialIcons
                                  name="book"
                                  size={20}
                                  color="white"
                                />
                                <Text ml="1" color="white">
                                  {item.source}
                                </Text>
                              </HStack>
                              <HStack>
                                <MaterialIcons
                                  name="restore"
                                  size={20}
                                  color="white"
                                />
                                <Text ml="1" color="white">
                                  {item.duration}
                                </Text>
                              </HStack>
                            </HStack>
                            <ScrollView
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}>
                              <HStack space={2} mt="1">
                                <Text color="white">Genre :</Text>
                                {item.genres.map((genre, i) => (
                                  <Box
                                    key={i}
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
                              EP {item.episodes}
                            </Text>
                          </Box>
                        </Box>
                      </Flex>
                    </Pressable>
                  </VStack>
                ))}
            </>
          </ScrollView>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};

export default AllAnimePage;
