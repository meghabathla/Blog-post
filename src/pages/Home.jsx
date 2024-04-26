import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../component";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap w-full min-h-96">
            <div className="p-2 w-full">
              <h1 className=" p-2  text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
              <p className="p-4">
                This blog site is where you can write or read blogs and
                articles. For new bloggers seeking blog app free of charge to
                kickstart their writing journey. Publish your passions your way.
                Whether you'd like to share your knowledge, experiences or the
                latest news, create a unique and beautiful blog.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
