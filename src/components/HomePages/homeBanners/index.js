import React from 'react';
import {Box, Image} from 'native-base';

const HomeBanners = () => {
  return (
    <Box bg="amber.100" h="280" mb="3">
      <Image
        source={{
          uri: 'https://img.freepik.com/premium-vector/dragon-demon-cartoon-anime-offline-banner-twitch_150972-865.jpg?w=2000',
        }}
        w="full"
        h="full"
        alt="Alternate Text"
        resizeMode="cover"
      />
    </Box>
  );
};

export default HomeBanners;
