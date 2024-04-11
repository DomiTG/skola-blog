import FooterComponent from "@/components/FooterComponent";
import LayoutComponent from "@/components/LayoutComponent";
import ListedPostsComponent from "@/components/ListedPostsComponent";
import NavComponent from "@/components/NavComponent";
import IPost from "@/interfaces/IPost";
import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <LayoutComponent>
      <NavComponent />
      <ListedPostsComponent posts={posts} loading={loading} />
      <FooterComponent />
    </LayoutComponent>
  );
}
