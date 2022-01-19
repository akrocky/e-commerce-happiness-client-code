import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <img
        width="100%"
        height="100%"
        src="https://i.ibb.co/H4Lcz2Z/congrats-work.gif"
        alt=""
      />
    </div>
  );
};

export default Success;
