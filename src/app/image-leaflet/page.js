import dynamic from "next/dynamic";
import React from "react";
import MapLibre from "../_features/image/components/MapLibre"

const ImagePage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../_features/image/components/LeafletMap"), {
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Map />
    </div>
  );
};

export default ImagePage;
