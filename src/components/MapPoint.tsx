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

export default function MapPoint({
  coordinates,
  placeId,
  placeName,
  location,
  author,
  postId,
}: {
  author: string;
  location: string;
  coordinates: string;
  placeName: string;
  placeId: string;
  postId?: string;
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
  const link = toBlogSlug({ id: placeId || "", name: placeName });
  return (
    <>
      <Marker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={toPosition(coordinates)}
      />

      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <p>{placeName}</p>
          <p className="text-sm">
            <span className=" font-bold ">Arquitecto:</span> {author}
          </p>
          <p className="text-sm">
            <span className=" font-bold ">Local:</span> {location}
          </p>
          {postId && (
            <Link href={link} className="text-blue-600 ">
              +info
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
