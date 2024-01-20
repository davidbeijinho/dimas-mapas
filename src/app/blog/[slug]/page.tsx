"use client";
import Post from "@/components/Post";
import Nav from "@/components/Nav";
import Image from "@/components/Image";
import Title from "@/components/Title";
import React, { useEffect, useState } from "react";
import Container from "@/components/ContainerWrap";
import {getPointByPostId, getPost} from "@/lib/pocketbase";
import ContainerPullUp from "@/components/ContainerPull";

export default function Info({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>({});
  const [point, setPoint] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPost({id: params.slug.split("-")[0]});
        if (response) {

          setPost(response);
        }
        
      } catch (error) {
        
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        
        const response = await getPointByPostId({id:params.slug.split("-")[0]});
        if (response) {

          setPoint(response);
        }
      } catch (error) {
        
      }
    }

    fetchData();
  }, []);
  console.log({post})
  console.log({point})
  if (post && point && point?.place_name) {
    return (
      <div>
        <Nav />
        <Title title={point?.place_name} />
        <Image />
        <Container pullUp={true}>
          <ContainerPullUp>

          <Post content={post?.content} />
          </ContainerPullUp>

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
