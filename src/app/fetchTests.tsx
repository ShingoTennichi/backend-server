"use client";
import { useEffect, useRef } from "react";


export default function FetchTest() {
  const url = useRef("");
  useEffect(() => {
    url.current = window.location.href;
    console.log(url);
  },[url])

  return (
    <div className="flex gap-8">
    </div>
  )
}


