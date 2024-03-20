import { Box, Text, Link } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import { apos } from 'lib/html-entities';
import IconSvg from 'ui/shared/IconSvg';
import SolidityscanReportButton from 'ui/shared/solidityscanReport/SolidityscanReportButton';
import SolidityscanReportDetails from 'ui/shared/solidityscanReport/SolidityscanReportDetails';
import SolidityscanReportScore from 'ui/shared/solidityscanReport/SolidityscanReportScore';

type Props = {
  securityReport?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  height?: string | undefined;
  showContractList: () => void;
  isLoading?: boolean;
  onlyIcon?: boolean;
}

const AppSecurityReport = ({ securityReport, height, showContractList, isLoading, onlyIcon }: Props) => {
  if (!securityReport && !isLoading) {
    return null;
  }

  const {
    securityScore = 0,
    solidityScanContractsNumber = 0,
    issueSeverityDistribution = {},
    totalIssues = 0,
  } = securityReport?.overallInfo || {};

  return (
    <SolidityscanReportButton
      isLoading={ isLoading }
      height={ height }
      score={ securityScore }
      onlyIcon={ onlyIcon }
      popoverContent={ (
        <>
          <Box mb={ 5 }>
            { solidityScanContractsNumber } smart contract{ solidityScanContractsNumber === 1 ? ' was' : 's were' } evaluated to determine
            this protocol{ apos }s overall security score on the { config.chain.name } network.
          </Box>
          <SolidityscanReportScore score={ securityScore }/>
          { issueSeverityDistribution && totalIssues > 0 && (
            <Box mb={ 5 }>
              <Text py="7px" variant="secondary" fontSize="xs" fontWeight={ 500 }>Threat score & vulnerabilities</Text>
              <SolidityscanReportDetails vulnerabilities={ issueSeverityDistribution } vulnerabilitiesCount={ totalIssues }/>
            </Box>
          ) }
          <Link onClick={ showContractList } display="inline-flex" alignItems="center">
            Analyzed contracts
            <IconSvg name="arrows/north-east" boxSize={ 5 } color="gray.400"/>
          </Link>
        </>
      ) }
    />
  );
};

export default AppSecurityReport;
