"use client";
import Posts from "@/components/Posts";
import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import ContainerWrap from "@/components/ContainerWrap";
import { getAuthors, getPlacesWithPosts, getPosts } from "@/lib/pocketbase";

export default function Info() {
  const [places, setPosts] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      const response = await getPlacesWithPosts();
      setPosts(response);
    }

    fetchData();
  }, []);
  // const [authors, setAuthors] = useState<any>({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getAuthors();
  //     const map = response.items.reduce((acc,current)=> {
  //       console.log({acc,current})
  //       acc[current.id]=current.name
  //       return acc
  //     },{})
  //     console.log({map})
  //     setAuthors(map);
  //   }

  //   fetchData();
  // }, []);
  // console.log({authors})
  return (
    <>
      <Nav />
      <ContainerWrap>
        {/* <pre>{JSON.stringify(places)}</pre> */}
        {places?.items?.length ? <Posts places={places.items} /> : "Loading"}
      </ContainerWrap>
    </>
  );
}
