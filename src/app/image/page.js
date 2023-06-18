import dynamic from "next/dynamic";
import React from "react";

const ImagePage = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../_features/image/components/LeafletMap"), {
        ssr: false,
      }),
    []
  );

  return (
    <div className="flex">
      <Map />
      <Map />
    </div>
  );
};

export default ImagePage;
