"use client";
import Post from "@/components/Post";
import Nav from "@/components/Nav";
import PostImage from "@/components/PostImage";
import Title from "@/components/Title";
import React, { useEffect, useState } from "react";
import { getPointByPostId, getPost } from "@/lib/pocketbase";
import ContainerPullUp from "@/components/ContainerPull";
import { slugToId } from "@/lib/utils";

export default function Info({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>({});
  const [point, setPoint] = useState<any>({});

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await getPost({ id: slugToId(params.slug) });
        if (response) {
          setPost(response);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchPost();
  }, [params.slug]);
  useEffect(() => {
    async function fetchPoint() {
      try {
        const response = await getPointByPostId({
          id: slugToId(params.slug),
        });
        if (response) {
          setPoint(response);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchPoint();
  }, [params.slug]);

  const hasData = post && point && point?.place_name;

  return (
    <>
      <Nav />
      {hasData ? (
        <>
          <Title title={point?.place_name} />
          <PostImage
            collection={post.collectionId}
            src={post.image}
            id={post.id}
          />
          <ContainerPullUp>
            <Post content={post?.content} />
          </ContainerPullUp>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
