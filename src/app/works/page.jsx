"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Works = () => {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/works/case-studies");
  // }, []);

  return <div>Works</div>;
};

export default Works;
