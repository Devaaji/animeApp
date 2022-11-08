import React from 'react';
import {Box, Flex, HStack, Pressable, ScrollView, Text} from 'native-base';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import useRemoteGenresAnime from '../../../hooks/remote/useRemoteGenresAnime';
import {TouchableRipple} from 'react-native-paper';

const GenresAnime = ({navigation}) => {
  const {data: dataGenresAnime} = useRemoteGenresAnime();
  return (
    <Box _text={{color: 'white'}} pl="2" mb="3" pb="3" mt="6">
      <TouchableRipple
        rippleColor="rgba(138, 122, 93, 0.3)"
        onPress={() =>
          navigation.push('GenreAnime', {
            nameHeader: 'Genre Anime',
            urlParams: '/top/anime',
          })
        }>
        <Flex direction="row" justify="space-between">
          <Text fontWeight="semibold" fontSize="md" color="white">
            Genres
          </Text>
          <Box>
            <Materialicon name="keyboard-arrow-right" size={25} color="white" />
          </Box>
        </Flex>
      </TouchableRipple>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack space={2} mt="4">
          {dataGenresAnime?.data.map((item, i) => (
            <React.Fragment key={i}>
              <Pressable
                onPress={() =>
                  navigation.push('GenreAnime', {
                    nameHeader: `Genre ${item.name}`,
                    itemId: item.mal_id,
                  })
                }>
                <Box bg="gray.800" p="2" rounded="md">
                  <Text color="white">{item.name}</Text>
                </Box>
              </Pressable>
            </React.Fragment>
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default GenresAnime;
