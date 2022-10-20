import { Center, Link, Text, chakra } from '@chakra-ui/react';
import React from 'react';

import link from 'lib/link/link';
import TokenLogo from 'ui/shared/TokenLogo';

interface Props {
  symbol?: string | null;
  hash: string;
  name?: string | null;
  className?: string;
}

const TokenSnippet = ({ symbol, hash, name, className }: Props) => {
  const url = link('token_index', { hash });

  return (
    <Center className={ className } columnGap={ 1 }>
      <TokenLogo boxSize={ 5 } hash={ hash } name={ name }/>
      <Link href={ url } target="_blank">
        { name }
      </Link>
      { symbol && <Text variant="secondary">({ symbol })</Text> }
    </Center>
  );
};

export default chakra(TokenSnippet);
