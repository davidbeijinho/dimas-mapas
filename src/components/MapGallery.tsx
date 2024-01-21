"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyle } from "@/styles/map";
import MapPoint from "@/components/MapPoint";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";

export interface Point {
  id: string;
  place_name: string;
  cordenadas: string;
  post?: string;
}

export interface MapGalleryProps {
  points: Point[];
}

export default function MapGallery({ points }: MapGalleryProps) {
  const position = { lat: 53.54992, lng: 10.00678 };
  const zoom = 3;

  return (
    <div
      style={{
        maxHeight: "700px",
        height: "75vh",
        width: "100%",
        maxWidth: "64rem",
      }}
    >
      <APIProvider apiKey={API_KEY}>
        <Map
          styles={mapStyle.styles}
          mapTypeId={mapStyle.mapTypeId}
          center={position}
          zoom={zoom}
        >
          {points?.map((point) => (
            <MapPoint
              key={point.place_name}
              coords={point.cordenadas}
              text={point.place_name}
              id={point.id}
              post={point.post}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
