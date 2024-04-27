import React from "react";

import { Container } from "../component";
import { useSelector } from "react-redux";

function Home() {
  const isUserLoggedIn = useSelector((state) => state.auth.status);

  return (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap w-full min-h-96">
          <div className="p-2 w-full">
            {!isUserLoggedIn ? (
              <h1 className=" p-2  text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            ) : null}

            <p className="p-4">
              This blog site is where you can write or read blogs and articles.
              For new bloggers seeking blog app free of charge to kickstart
              their writing journey. Whether you'd like to share your knowledge,
              experiences or the latest news, create a unique and beautiful
              blog. Publish your passions your way.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
