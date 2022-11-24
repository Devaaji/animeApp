import React, {useEffect, useState} from 'react';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import LoadingDetailAnime from '../utils/Skeleton/LoadingDetailAnime';
import useRemoteDetailAnime from '../hooks/remote/useRemoteDetailAnime';
import useRemoteEpisodeAnime from '../hooks/remote/useRemoteEpisodeAnime';
import useStoreAnime from '../store/useStoreAnime';

const DetailDataAnime = ({route}) => {
  const {itemId} = route.params;

  const {data: dataDetailAnime, isLoading} = useRemoteDetailAnime({
    id: itemId,
  });

  const {data: dataGetEpisodeAnime} = useRemoteEpisodeAnime({
    id: itemId,
  });

  const [isWishlist, setIsWishlist] = useState(false);

  const updateCurrentFavorit = useStoreAnime(
    state => state.updateCurrentFavorit,
  );

  const currentFavorit = useStoreAnime(state => state.currentFavorit);

  useEffect(() => {
    const animeWishlist = currentFavorit.find(wl => wl.id === itemId);

    if (animeWishlist) {
      setIsWishlist(true);
    }
  }, [currentFavorit, itemId]);

  return (
    <Box bg="gray.800" h="full">
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        {isLoading ? (
          <LoadingDetailAnime />
        ) : (
          <Box h="full">
            <Box bg="black" w="full" h="200" position="relative">
              <Image
                source={{
                  uri: dataDetailAnime?.data.images.jpg.image_url,
                }}
                w="full"
                h="full"
                opacity="50"
                alt="Alternate Text"
                resizeMode="cover"
              />
              <Box
                m="3"
                position="absolute"
                bg="black"
                h="170"
                w="130"
                overflow="hidden"
                rounded="md">
                <Image
                  source={{
                    uri: dataDetailAnime?.data.images.jpg.image_url,
                  }}
                  w="full"
                  h="full"
                  alt="Alternate Text"
                  resizeMode="cover"
                />
              </Box>
            </Box>
            <VStack p="3">
              <HStack justifyContent="space-between" pr="5">
                <Text color="white" fontWeight="bold" fontSize="lg" mb="2">
                  {dataDetailAnime?.data.title}
                </Text>
                <Box>
                  <IconButton
                    borderRadius="full"
                    variant="ghost"
                    disabled={isWishlist}
                    icon={
                      <Materialicon
                        name="favorite"
                        size={25}
                        color={isWishlist ? 'red' : 'white'}
                      />
                    }
                    onPress={() => {
                      updateCurrentFavorit({
                        id: itemId,
                        title: dataDetailAnime?.data.title,
                        img: dataDetailAnime?.data.images.jpg.image_url,
                        genres: dataDetailAnime?.data.genres,
                        source: dataDetailAnime?.data.source,
                        eps: dataDetailAnime?.data.episodes,
                        duration: dataDetailAnime?.data.duration,
                      });
                    }}
                  />
                </Box>
              </HStack>
              <HStack>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Text color="white" mr="2">
                    Genre
                  </Text>
                  {dataDetailAnime?.data.genres.map((genre, i) => (
                    <Box key={i} bg="gray.600" px="2" rounded="sm" mr="2">
                      <Text color="white">{genre.name}</Text>
                    </Box>
                  ))}
                </ScrollView>
              </HStack>
            </VStack>
            <Flex direction="row" justify="space-between" align="center" p="3">
              <Avatar.Group
                _avatar={{
                  size: 'md',
                }}
                max={3}>
                <Avatar
                  bg="gray.200"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}>
                  AJ
                </Avatar>
                <Avatar
                  bg="gray.300"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  }}>
                  TE
                </Avatar>
                <Avatar
                  bg="gray.400"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}>
                  JB
                </Avatar>
                <Avatar
                  bg="gray.500"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  }}>
                  TS
                </Avatar>
                <Avatar
                  bg="green.500"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}>
                  AJ
                </Avatar>
              </Avatar.Group>
              <HStack>
                <Text fontSize="sm" color="white" mr="1">
                  All Comments
                </Text>
                <Box>
                  <Materialicon
                    name="keyboard-arrow-right"
                    size={25}
                    color="white"
                  />
                </Box>
              </HStack>
            </Flex>
            <Flex direction="row" p="3">
              <Box bg="gray.700" flex={1} m="1" py="2" rounded="md">
                <VStack alignSelf="center" alignItems="center">
                  <Box>
                    <Materialicon name="star-outline" size={25} color="white" />
                  </Box>
                  <Box>
                    <Text color="white" fontSize="xs">
                      Rating
                    </Text>
                  </Box>
                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="xs">
                      {dataDetailAnime?.data.score}
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box bg="gray.700" flex={1} m="1" py="2" rounded="md">
                <VStack alignSelf="center" alignItems="center">
                  <Box>
                    <Materialicon name="restore" size={25} color="white" />
                  </Box>
                  <Box>
                    <Text color="white" fontSize="xs">
                      Status
                    </Text>
                  </Box>
                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="xs">
                      {dataDetailAnime?.data.status}
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box bg="gray.700" flex={1} m="1" py="2" rounded="md">
                <VStack alignSelf="center" alignItems="center">
                  <Box>
                    <Materialicon name="book" size={25} color="white" />
                  </Box>
                  <Box>
                    <Text color="white" fontSize="xs">
                      Source
                    </Text>
                  </Box>
                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="xs">
                      {dataDetailAnime?.data.source}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </Flex>
            <Box p="3">
              <Text color="white">{dataDetailAnime?.data.synopsis}</Text>
            </Box>
            <Box p="3">
              <Box bg="gray.700" rounded="md" p="3">
                <HStack>
                  <Box
                    borderBottomWidth={1}
                    borderBottomColor="gray.600"
                    pb="2"
                    w="full">
                    <Text color="white" fontWeight="bold">
                      All Episodes
                    </Text>
                  </Box>
                </HStack>
                {dataGetEpisodeAnime?.data.map((eps, index) => (
                  <Flex
                    key={index}
                    direction="row"
                    justify="space-between"
                    align="center"
                    mt="2"
                    p="2"
                    bg="gray.600"
                    rounded="md">
                    <Text color="white">Episode {index + 1}</Text>
                    <Button size="xs" variant="outline" colorScheme="blue">
                      <Text color="white">Watch</Text>
                    </Button>
                  </Flex>
                ))}
                {dataGetEpisodeAnime?.data.length === 0 && (
                  <Box mt="2">
                    <Text color="white" textAlign="center">
                      Not Found Episode!
                    </Text>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
};

export default DetailDataAnime;
