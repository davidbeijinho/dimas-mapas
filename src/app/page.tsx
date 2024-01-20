'use client'
import MapGallery from "@/components/MapGallery";
import Nav from "@/components/Nav";
import Image from "@/components/Image";
import Title from "@/components/Title";
import React, { useEffect, useState } from 'react';
import Container from "@/components/Container";

export default function Home() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/points/api/');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);
  console.log(data)
  if (data.length) {
    return (
      <div>
        <Nav />
        {/* <Title /> */}
        {/* <Image /> */}
        {/* <Post /> */}
        <Container>

      {/* <ul>
          {data?.map((point) => (
            <li key={point.name}>{point.name}</li>
            ))}
          </ul> */}
        <MapGallery points={data}/>
          </Container>
      </div>
    );
  }
  return (
    <div>
      LOADING
    </div>
  )
}
