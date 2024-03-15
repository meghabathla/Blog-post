import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//authentication layout for pages and routes to protect..auth m jo state h abh hum uska use kr rhy h n protect kr rhy h

export default function Protected({ children, authentication = true }) {
  //here authentication value is coming from user
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); //checking user sttus from store before cheking from user data send by user

  useEffect(() => {
    // true && (false !== true) true
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    // false && (true !== true) false
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
      setLoader(false);
    }
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
