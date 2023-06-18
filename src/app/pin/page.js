import dynamic from 'next/dynamic';
import React from 'react';

const PinPage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('../_features/pin/components/Map'), {
        ssr: false,
      }),
    []
  );

  return <Map />;
};

export default PinPage;
