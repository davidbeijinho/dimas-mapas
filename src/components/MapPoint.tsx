import React, { useState } from "react";
import {
  InfoWindow,
  useMarkerRef,
  // AdvancedMarker,
  // useAdvancedMarkerRef,
  Marker,
} from "@vis.gl/react-google-maps";
import Link from "next/link";
import { toBlogSlug } from "@/lib/utils";

export default function Point({
  text,
  coords,
  id,
  post,
}: {
  coords: string;
  text: string;
  id: string;
  post?: string;
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
  const link = toBlogSlug(post || "", text);
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
          {post && (
            <Link href={link} className="text-blue-600 ">
              +info{" "}
            </Link>
          )}
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
