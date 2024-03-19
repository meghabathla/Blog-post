import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// isProtectedRoute layout for pages and routes to protect..auth m jo state h abh hum uska use kr rhy h n protect kr rhy h

// accessing /login
// isprotected = fasle
// isUserLoggedIn = false

// allow user to view the children-- Loader = false

export default function Protected({ children, isProtectedRoute = true }) {
  //here isProtectedRoute value is coming from user
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const isUserLoggedIn = useSelector((state) => state.auth.status); //checking user sttus from store before cheking from user data send by user
  //const shouldHaveRouteAccess = isUserLoggedIn !== isProtectedRoute;

  useEffect(() => {
    // redirect user to login page if user is not loggedin
    // and trying to access protected route
    if (isProtectedRoute && !isUserLoggedIn) {
      navigate("/login");
    }

    //
    else if (!isProtectedRoute && isUserLoggedIn) {
      navigate("/");
      setLoader(false);
    }

    setLoader(false);
  }, [isUserLoggedIn, navigate, isProtectedRoute]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
