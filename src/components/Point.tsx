import React, { useState } from "react";
import {
  InfoWindow,
  useMarkerRef,
  // AdvancedMarker,
  // useAdvancedMarkerRef,
  Marker,
} from "@vis.gl/react-google-maps";

export default function Point({
  text,
  coords,
}: {
  coords: string;
  text: string;
}) {
  const toPosition = (str: string) => {
    return {
      lat: parseFloat(str.split(",")[0]),
      lng: parseFloat(str.split(",")[1]),
    };
  };
  // const [infowindowOpen, setInfowindowOpen] = useState(false);
  // const [markerRef, marker] = useAdvancedMarkerRef();

  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useMarkerRef();

  return (
    <>
      <Marker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={toPosition(coords)}
      />

      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          {text}
        </InfoWindow>
      )}

      {/* <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={toPosition(coords)}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
          {text}
        </InfoWindow>
      )} */}
    </>
  );
}
