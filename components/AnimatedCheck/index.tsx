import { Box } from 'native-base';
import React, { FC, useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

interface Props {
  checked?: boolean;
  color?: string;
  bg?: string;
}
const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedCheck: FC<Props> = ({ checked = false, color = 'green', bg = 'dark.100' }) => {
  const leftCheck = useSharedValue(0);
  const rightCheck = useSharedValue(0);

  useEffect(() => {
    leftCheck.value = withTiming(checked ? 0 : 30, {
      duration: !checked ? 0 : 200,
      easing: Easing.linear,
    });
    rightCheck.value = withDelay(
      !checked ? 0 : 200,
      withTiming(checked ? 0 : 30, { duration: !checked ? 0 : 200, easing: Easing.linear }),
    );
  }, [checked]);

  const animatedProps1 = useAnimatedProps(() => ({
    strokeDashoffset: leftCheck.value,
  }));
  const animatedProps2 = useAnimatedProps(() => ({
    strokeDashoffset: rightCheck.value,
  }));

  return (
    <Box borderRadius='5' bg={bg} w='30' h='30' p={0.5}>
      <Svg width='25' height='25' viewBox={'0 0 30 30'}>
        <AnimatedPath
          d='M5 11C7.33333 13.092 12.6 18.8207 15 25'
          stroke={color}
          strokeWidth='3'
          strokeLinecap='round'
          strokeDasharray='30'
          animatedProps={animatedProps1}
        />
        <AnimatedPath
          d='M15 25C15.6944 21.0317 20 12.5 26.5 5'
          stroke={color}
          strokeWidth='3'
          strokeLinecap='round'
          strokeDasharray='30'
          animatedProps={animatedProps2}
        />
      </Svg>
    </Box>
  );
};

export default AnimatedCheck;
