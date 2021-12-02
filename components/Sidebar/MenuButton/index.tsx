import { Feather } from '@expo/vector-icons';
import { Button, IButtonProps, Icon } from 'native-base';
import React from 'react';
interface Props extends IButtonProps {
  active: boolean;
  icon: string;
  children: React.ReactNode;
}
const MenuButton: React.FC<Props> = ({ active, icon, children, ...props }) => {
  return (
    <Button
      size='lg'
      _light={{
        colorScheme: 'violet',
        _text: {
          color: active ? 'violet.50' : 'violet.500',
        },
      }}
      _dark={{
        colorScheme: 'violet',
        _text: {
          color: active ? 'violet.50' : undefined,
        },
      }}
      variant='solid'
      bg={active ? undefined : 'transparent'}
      leftIcon={<Icon as={Feather} name={icon} size='sm' opacity={0.5} />}
      {...props}>
      {children}
    </Button>
  );
};

export default MenuButton;
