import React from 'react';
import {Box, Image} from 'native-base';

const HomeBanners = () => {
  return (
    <Box bg="gray.800" h="280" mb="3">
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/ab/ba/b0/abbab0891a52dac14bcdfcef3a0b964b.png',
        }}
        w="full"
        h="full"
        alt="Alternate Text"
      />
    </Box>
  );
};

export default HomeBanners;
