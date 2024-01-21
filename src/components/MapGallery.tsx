"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyle } from "@/styles/map";
import MapPoint from "@/components/MapPoint";
import { PlacesRecord } from "@/../pocketbase-types";
import { API_KEY, MAP_CENTER, MAP_ZOOM } from "@/lib/configs";

export default function MapGallery({ points }: { points: PlacesRecord[] }) {
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
          center={MAP_CENTER}
          zoom={MAP_ZOOM}
        >
          {points?.map((point) =>
            point.coordinates ? (
              <MapPoint
                key={point.name}
                coordinates={point.coordinates}
                pointName={point.name}
                postId={point.post}
              />
            ) : (
              <></>
            ),
          )}
        </Map>
      </APIProvider>
    </div>
  );
}
