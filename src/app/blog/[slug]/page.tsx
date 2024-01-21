"use client";
import Post from "@/components/Post";
import Nav from "@/components/Nav";
import PostImage from "@/components/PostImage";
import Title from "@/components/Title";
import React, { useEffect, useState, useMemo } from "react";
import { getPlace } from "@/lib/pocketbase";
import ContainerPullUp from "@/components/ContainerPull";
import { slugToId } from "@/lib/utils";

export default function Info({ params }: { params: { slug: string } }) {
  const [place, setPlace] = useState<any>({});
  // const [point, setPoint] = useState<any>({});

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await getPlace({ id: slugToId(params.slug) });
        if (response) {
          setPlace(response);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchPost();
  }, [params.slug]);
  // useEffect(() => {
  //   async function fetchPoint() {
  //     try {
  //       const response = await getPointByPostId({
  //         id: slugToId(params.slug),
  //       });
  //       if (response) {
  //         setPoint(response);
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }

  //   fetchPoint();
  // }, [params.slug]);
  const hasData = useMemo(() => place && place?.post, [place]);
  return (
    <>
      <Nav />
      {hasData ? (
        <>
          <Title title={place?.name} />
          <PostImage
            collection={place.expand.post.collectionId}
            filename={place.expand.post.image}
            id={place.expand.post.id}
          />
          <ContainerPullUp>
            <Post content={place.expand.post.content} />
          </ContainerPullUp>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
