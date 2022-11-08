import React, {useEffect, useState} from 'react';

import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useRemoteSearchAnime from '../hooks/remote/useRemoteSearchAnime';
import LoadingSearchAnime from '../utils/Skeleton/LoadingSearchAnime';

const SearchPage = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('');

  const {
    data: searchDataAnime,
    isLoading,
    isSuccess,
  } = useRemoteSearchAnime({
    search: filter,
  });

  const handleSubmitSearch = e => {
    e.preventDefault();

    if (searchInput !== '') {
      setFilter(searchInput);
    }
  };

  useEffect(() => {
    if (searchInput === '') {
      setFilter('');
    }
  }, [searchInput]);

  console.log('Result', searchDataAnime);
  return (
    <Box bg="gray.900" p="2" pb="10">
      <Box h="full" p="2">
        <VStack w="full" space={5} alignSelf="center">
          <InputGroup>
            <Input
              placeholder="Search anime"
              width="100%"
              borderRadius="6"
              py="2"
              autoFocus={true}
              value={searchInput}
              px="1"
              onChange={event => setSearchInput(event.nativeEvent.text)}
              onKeyPress={e => {
                console.log(e);
              }}
              onSubmitEditing={handleSubmitSearch}
              color="white"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
            />
          </InputGroup>
        </VStack>
        <Box mt="4">
          {isLoading && <LoadingSearchAnime />}
          {searchDataAnime?.data ? (
            <ScrollView showsVerticalScrollIndicator={true}>
              <Box>
                <Text color="white">
                  Your Search : {filter}{' '}
                  {searchDataAnime?.data.length === 0 && 'Not Found !'}
                </Text>
              </Box>
              <>
                {isSuccess &&
                  searchDataAnime?.data.map((item, index) => (
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
    </Box>
  );
};

export default SearchPage;
