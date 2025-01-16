import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';

import type { PaginationParams } from 'ui/shared/pagination/types';

import { route } from 'nextjs-routes';

import useApiQuery from 'lib/api/useApiQuery';
import { nbsp } from 'lib/html-entities';
import { HOMEPAGE_STATS } from 'stubs/stats';
import colors from 'theme/foundations/colors';
import Skeleton from 'ui/shared/chakra/Skeleton';
import IconSvg from 'ui/shared/IconSvg';
import LinkInternal from 'ui/shared/links/LinkInternal';
import Pagination from 'ui/shared/pagination/Pagination';
interface Props {
  pagination: PaginationParams;
}

const BlocksTabSlot = ({ pagination }: Props) => {
  const statsQuery = useApiQuery('stats', {
    queryOptions: {
      placeholderData: HOMEPAGE_STATS,
    },
  });

  return (
    <Flex alignItems="center" columnGap={ 8 } display={{ base: 'none', lg: 'flex' }}>
      { statsQuery.data?.network_utilization_percentage !== undefined && (
        <Box>
          <Text as="span" fontSize="sm">
            Network utilization (last 50 blocks):{ nbsp }
          </Text>
          <Skeleton display="inline-block" fontSize="sm" color={ colors.warning[300] } fontWeight={ 600 } isLoaded={ !statsQuery.isPlaceholderData }>
            <span>{ statsQuery.data.network_utilization_percentage.toFixed(2) }%</span>
          </Skeleton>
        </Box>
      ) }
      <LinkInternal display="inline-flex" alignItems="center" href={ route({ pathname: '/block/countdown' }) }>
        <IconSvg name="hourglass" boxSize={ 5 } mr={ 2 }/>
        <span>Block countdown</span>
      </LinkInternal>
      <Pagination my={ 1 } { ...pagination }/>
    </Flex>
  );
};

export default BlocksTabSlot;
