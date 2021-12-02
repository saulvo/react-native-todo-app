import { Heading, HStack, Image, useToken, VStack } from 'native-base';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import AnimatedColorText from '../AnimatedColorText';

interface Props {
  title: string;
  image: ImageSourcePropType;
}

const Banner: React.FC<Props> = ({ image, title }) => {
  return (
    <VStack w='full' pb={2}>
      <Image h='80px' resizeMode='contain' source={image} alt='banner' />
      <Heading p={3} size='xl' textAlign='center'>
        <AnimatedColorText
          text={title}
          color={{
            dark: useToken('colors', 'dark.900'),
            light: useToken('colors', 'dark.300'),
          }}
        />
      </Heading>
    </VStack>
  );
};

export default Banner;
