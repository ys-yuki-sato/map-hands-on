import dynamic from 'next/dynamic';
import React from 'react';

const TooMultiPinPage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('../_features/tooManyPin/components/Map'), {
        ssr: false,
      }),
    []
  );

  return <Map />;
};

export default TooMultiPinPage;
