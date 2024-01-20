"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Point from "@/components/Point";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const MapTypeId = {
  HYBRID: 'hybrid',
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain'
};

export interface Point {
  name: String;
  coords: String;
}

export interface MapGalleryProps {
  points: Point[];
}
import vitaminCStyles from '@/styles/vitamin-c';

const config =   {
  id: 'styled2',
  label: 'Raster / "Vitamin C" (no mapId)',
  mapTypeId: MapTypeId.ROADMAP,
  styles: vitaminCStyles
}

export default function MapGallery({ points }: MapGalleryProps) {
  
  const position = { lat: 53.54992, lng: 10.00678 };
  
  const zoom = 3;

  

  return (
    <div style={{ height: "700px", width: "1000px" }}>
      <APIProvider apiKey={API_KEY}>
        <Map
                mapId={'bf51a910020fa25a'}
          styles={config.styles}
          mapTypeId={config.mapTypeId}
          center={position}
          zoom={zoom}>
          {points?.map((point) => (
            <Point key={point.name}  coords={point.coords} text={point.name}/>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
