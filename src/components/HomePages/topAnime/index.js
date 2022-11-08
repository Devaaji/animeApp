import React from 'react';
import {
  Box,
  Flex,
  HStack,
  ScrollView,
  Text,
  Image,
  Pressable,
} from 'native-base';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import LoadingCardAnime from '../../../utils/Skeleton/LoadingCardAnime';
import useRemoteTopAnime from '../../../hooks/remote/useRemoteTopAnime';
import {TouchableRipple} from 'react-native-paper';

const TopAnimeCard = ({navigation}) => {
  const {data: dataTopAnime, isLoading} = useRemoteTopAnime();

  return (
    <Box safeArea pl="2" mb="3" pb="3" mt="6">
      <TouchableRipple
        rippleColor="rgba(138, 122, 93, 0.3)"
        onPress={() =>
          navigation.push('AllAnime', {
            nameHeader: 'Top Anime',
            urlParams: '/top/anime',
          })
        }>
        <Flex direction="row" justify="space-between">
          <Text fontWeight="semibold" fontSize="md" color="white">
            Top Anime
          </Text>
          <Box>
            <Materialicon name="keyboard-arrow-right" size={25} color="white" />
          </Box>
        </Flex>
      </TouchableRipple>
      <HStack>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {isLoading ? (
            <LoadingCardAnime />
          ) : (
            <React.Fragment>
              {dataTopAnime?.data.slice(0, 10).map((item, i) => (
                <Box key={i} w="150" mr="2">
                  <Pressable
                    onPress={() =>
                      navigation.push('Detail', {
                        itemId: item.mal_id,
                      })
                    }>
                    <Box
                      overflow="hidden"
                      position="relative"
                      mt="1"
                      rounded="lg"
                      w="full"
                      h="200">
                      <Image
                        source={{
                          uri: item.images.jpg.image_url,
                        }}
                        w="full"
                        h="full"
                        alt="Alternate Text"
                        resizeMode="cover"
                      />
                      <Box
                        position="absolute"
                        bottom={0}
                        opacity={70}
                        bg={{
                          linearGradient: {
                            colors: ['transparent', 'black'],
                            start: [0, 0],
                            end: [0, 1],
                          },
                        }}
                        w="full"
                        h="30%">
                        <Flex justify="flex-end" h="full">
                          <Text
                            p="2"
                            color="white"
                            fontWeight="bold"
                            zIndex={4}>
                            EP {item.episodes ? item.episodes : 'NEW'}
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                    <Box>
                      <Text isTruncated={true} color="white">
                        {item.title}
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
              ))}
            </React.Fragment>
          )}
        </ScrollView>
      </HStack>
    </Box>
  );
};

export default TopAnimeCard;
