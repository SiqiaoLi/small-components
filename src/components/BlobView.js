import React, { useState, useEffect } from "react";

const BlogView = ({ id }) => {
  // local state to store blog content
  const [blogContent, setBlogContent] = useState(null);
  useEffect(() => {
    // callback async function in useEffect need to fengzhuan
    const doAsync = async () => {
      // when id changes, clear current state
      setBlogContent(null);
      // fetch data from server
      const res = await fetch(`/blog-content/${id}`);
      setBlogContent(await res.text());
    };
    doAsync();
  }, [id]);

  const isLoading = !blogContent;
  return <div>{isLoading ? "Loading..." : blogContent}</div>;
};
