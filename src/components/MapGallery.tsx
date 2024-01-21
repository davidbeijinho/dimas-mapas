"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyle } from "@/styles/map";
import MapPoint from "@/components/MapPoint";
import {
  AuthorsResponse,
  LocationsResponse,
  PlacesResponse,
  TagsResponse,
} from "@/../pocketbase-types";
import { API_KEY, MAP_CENTER, MAP_ZOOM } from "@/lib/configs";

interface PlaceProps extends PlacesResponse {
  expand: {
    tags: TagsResponse[];
    location: LocationsResponse;
    author: AuthorsResponse[];
  };
}

export default function MapGallery({ places }: { places: PlaceProps[] }) {
  console.log(places);
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
          {places?.map((place) =>
            place.coordinates ? (
              <MapPoint
                key={place.name}
                coordinates={place.coordinates}
                placeName={place.name}
                placeId={place.id}
                postId={place.post}
                location={place.expand.location.name}
                author={place.expand.author[0].name}
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
