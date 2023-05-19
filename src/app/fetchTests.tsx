"use client"
type props = {getTest: Function, createTest: Function, deleteTest: Function}

import { useEffect, useRef } from "react";


export default function FetchTest({getTest, createTest, deleteTest}: props) {
  const url = useRef("");
  useEffect(() => {
    url.current = window.location.href;
    console.log(url);
  },[url])

  async function a() {
    const res = await getTest(url.current);
    console.log(res);
  }
  return (
    <div className="flex gap-8">
      {/* <button onClick={() => getTest(url.current)}>GET</button> */}
      <button onClick={() => a()}>GET</button>
      <button onClick={() => createTest(url.current)}>CREATE</button>
      <button onClick={() => deleteTest(url.current)}>DELETE</button>
      <button onClick={() => console.log(url)}>DELETE</button>
    </div>
  )
}