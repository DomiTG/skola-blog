import CreatePostComponent from "@/components/CreatePostComponent";
import FooterComponent from "@/components/FooterComponent";
import LayoutComponent from "@/components/LayoutComponent";
import ListedPostsComponent from "@/components/ListedPostsComponent";
import NavComponent from "@/components/NavComponent";
import IPost from "@/interfaces/IPost";
import { useEffect, useState } from "react";

export default function CreatePost() {

  return (
    <LayoutComponent>
      <NavComponent />
      <CreatePostComponent/>
      <FooterComponent />
    </LayoutComponent>
  );
}
