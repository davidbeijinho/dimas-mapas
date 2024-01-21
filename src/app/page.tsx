"use client";
import MapGallery from "@/components/MapGallery";
import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import ContainerWrap from "@/components/ContainerWrap";
import { getPoints } from "@/lib/pocketbase";

export default function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPoints();

        setData(response);
      } catch (error) {}
    }

    fetchData();
  }, []);
  return (
    <>
      <Nav />
      <ContainerWrap>
        {data?.items?.length ? <MapGallery points={data.items} /> : "Loading"}
      </ContainerWrap>
    </>
  );
}
