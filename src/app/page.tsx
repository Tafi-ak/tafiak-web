import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Abdul",
}


export default function Home() {
  return (
    <>
    <h1>Hello world!</h1>
    <h1>Welcome to Next.js 13</h1>
    <Link href="/about">About</Link>
    </>
  );
}
