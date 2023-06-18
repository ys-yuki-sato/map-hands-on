import dynamic from 'next/dynamic';
import React from 'react';

const ManyPinPage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('../_features/manyPin/components/Map'), {
        ssr: false,
      }),
    []
  );

  return <Map />;
};

export default ManyPinPage;
