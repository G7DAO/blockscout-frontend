import NextErrorComponent from 'next/error';
import React from 'react';

import type { Props as ServerSidePropsCommon } from 'nextjs/getServerSideProps';

type Props = ServerSidePropsCommon & {
  statusCode: number;
};

const CustomErrorComponent = (props: Props) => {
  return <NextErrorComponent statusCode={ props.statusCode } withDarkMode={ true }/>;
};

export default CustomErrorComponent;
