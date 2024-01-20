import { Marker } from "@vis.gl/react-google-maps";
//import Image from 'next/image';

export default function MapPoint({
  text,
  coords,
}: {
  coords: String;
  text: String;
}) {
  const toPosition = (str: String) => {
    return {
      lat: parseFloat(str.split(",")[0]),
      lng: parseFloat(str.split(",")[1]),
    };
  };
  console.log(text);
  return <Marker position={toPosition(coords)} />;
}
