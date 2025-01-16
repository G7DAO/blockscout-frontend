import { Center, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import colors from 'theme/foundations/colors';
import TokenLogoPlaceholder from 'ui/shared/TokenLogoPlaceholder';

interface Props {
  url: string | undefined;
  isInvalid: boolean;
  children: React.ReactElement;
}

const TokenInfoIconPreview = ({ url, onError, onLoad, isInvalid }: Props) => {
  const borderColor = useColorModeValue('gray.100', colors.grayTrue[300]); //'gray.700'
  const borderColorFilled = useColorModeValue('gray.300', colors.grayTrue[200]); //'gray.600'
  const borderColorError = useColorModeValue('red.400', colors.error[300]); //'red.300'
  const borderColorActive = isInvalid ? borderColorError : borderColorFilled;

  return (
    <Center
      boxSize={{ base: '60px', lg: '80px' }}
      flexShrink={ 0 }
      borderWidth="2px"
      borderColor={ url ? borderColorActive : borderColor }
      borderRadius="base"
    >
      { children }
    </Center>
  );
};

export default React.memo(TokenInfoIconPreview);
