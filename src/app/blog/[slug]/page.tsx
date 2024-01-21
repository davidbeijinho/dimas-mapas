"use client";
import Post from "@/components/Post";
import Nav from "@/components/Nav";
import PostImage from "@/components/PostImage";
import Title from "@/components/Title";
import React, { useEffect, useState, useMemo } from "react";
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
  const hasData = useMemo(() => post && point && point?.name, [point, post]);
  return (
    <>
      <Nav />
      {hasData ? (
        <>
          <Title title={point?.name} />
          <PostImage
            collection={post.collectionId}
            filename={post.image}
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
