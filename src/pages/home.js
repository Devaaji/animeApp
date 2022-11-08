import React from 'react';
import {ScrollView, Box} from 'native-base';
import HomeBanners from '../components/HomePages/homeBanners';
import TopAnimeCard from '../components/HomePages/topAnime';
import RecomendationAnime from '../components/HomePages/recomendationAnime';
import GenresAnime from '../components/HomePages/genresAnime';

const HomePage = ({navigation}) => {
  return (
    <React.Fragment>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          bg={{
            linearGradient: {
              colors: ['black', 'gray.900'],
              start: [0, 0],
              end: [0, 1],
            },
          }}>
          <HomeBanners />
          <RecomendationAnime navigation={navigation} />
          <GenresAnime navigation={navigation} />
          <TopAnimeCard navigation={navigation} />
          <HomeBanners />
          <RecomendationAnime navigation={navigation} />
          <TopAnimeCard navigation={navigation} />
        </Box>
      </ScrollView>
    </React.Fragment>
  );
};

export default HomePage;
