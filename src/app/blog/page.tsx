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
  console.log({ posts });

  if (posts?.items?.length) {
    return (
      <div>
        <Nav />
        <ContainerWrap>
          <Posts posts={posts.items} />
        </ContainerWrap>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}
