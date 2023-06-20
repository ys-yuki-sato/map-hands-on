import dynamic from 'next/dynamic';
import React from 'react';

const ShapesLeafletPage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('../_features/shapes-leaflet/components/Map'), {
        ssr: false,
      }),
    []
  );

  return <Map />;
};

export default ShapesLeafletPage;
