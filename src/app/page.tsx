"use client";
import MapGallery from "@/components/MapGallery";
import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import ContainerWrap from "@/components/ContainerWrap";
import { getPlaces } from "@/lib/pocketbase";

export default function Home() {
  const [places, setPlaces] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPlaces();

        setPlaces(response);
      } catch (error) {}
    }

    fetchData();
  }, []);
  return (
    <>
      <Nav />
      <ContainerWrap>
        {places?.items?.length ? (
          <MapGallery places={places.items} />
        ) : (
          "Loading"
        )}
        <label htmlFor="pet-select">Autores:</label>

        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <br />
        <label htmlFor="pet-select">Paises:</label>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <br />
        <label htmlFor="pet-select">Tags:</label>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </ContainerWrap>
    </>
  );
}
