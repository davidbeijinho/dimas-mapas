'use client'

import GoogleMapReact from 'google-map-react';
import MapPoint from '@/components/MapPoint';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;


export interface Point {
  name: String,
  coords: String,
}

export interface MapGalleryProps {
  points: Point[]
  // id: string;
  // email: string;
  // age?: number;
  // isMarried?: boolean;
  // role: Role;
  // skills?: string[];
  // updateEmail?: (
  //   id: string,
  //   newEmail: string
  // ) => {
  //   success: boolean;
  //   message: string;
  // };
}


export default function MapGallery({ points }: MapGalleryProps) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 0
  };
  
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div style={{ height: '700px', width: '1000px' }}>
         {/* <ul>
        {points?.map((point) => (
          <li key={point.name}>{point.name} {point.coords.split(',')[0]} | {point.coords.split(',')[1]}</li>
        ))}
      </ul> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
         {/* {points?.map((point) => (
        
        <MapPoint
          key={point.name}
          lat={point.coords.split(',')[0]}
          lng={point.coords.split(',')[1]}
          text={point.name}
        />
        ))} */}
          <AnyReactComponent
  lat={59.955413} lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
