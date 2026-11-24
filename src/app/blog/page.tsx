import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
}


export default function Blog() {
  return (
    <h2 style={{textAlign: 'center'}}>No blog posts yet. Check back soon.</h2>
  );
}