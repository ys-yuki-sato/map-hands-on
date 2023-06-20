import dynamic from 'next/dynamic';
import React from 'react';

const ManyShapesLeafletPage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('../_features/manyShapes-leaflet/components/Map'), {
        ssr: false,
      }),
    []
  );

  return <Map />;
};

export default ManyShapesLeafletPage;
