import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 error",
}

export default function NotFound(){
    return(
        <h1>404 Not Found</h1>
    )
}