import { Text, useColorMode } from 'native-base';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Props {
  text?: string;
  color: {
    dark: string;
    light: string;
  };
  [key: string]: any;
}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedColorText: React.FC<Props> = ({ text = '', color, ...props }) => {
  const shareValue = useSharedValue(color.dark);
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    shareValue.value = colorMode === 'dark' ? color.dark : color.light;
  }, [colorMode]);

  const style = useAnimatedStyle(() => {
    return {
      color: withTiming(shareValue.value, { duration: 250 }),
    };
  });
  return (
    <AnimatedText style={style} {...props}>
      {text}
    </AnimatedText>
  );
};

export default AnimatedColorText;
