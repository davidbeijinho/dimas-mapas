"use client";
import Posts from "@/components/Posts";
import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import ContainerWrap from "@/components/ContainerWrap";
import { getPosts } from "@/lib/pocketbase";

export default function Info() {
  const [posts, setPosts] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();
      setPosts(response);
    }

    fetchData();
  }, []);
  return (
    <>
      <Nav />
      <ContainerWrap>
        {posts?.items?.length ? <Posts posts={posts.items} /> : "Loading"}
      </ContainerWrap>
    </>
  );
}
