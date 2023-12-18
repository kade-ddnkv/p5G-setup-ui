'use client'

import { useState } from "react";
import InitialBox from "./components/initial";
import FirstStep from "./components/first";
import SecondStep from "./components/second";

export default function Home() {

  const [pageNumber, setPageNumber] = useState<number>(1);

  let pageBox;
  let back;
  let nextStep;

  console.log(pageNumber)
  if (pageNumber === 1) {
    pageBox = FirstStep;
    back = <p></p>
    nextStep = <button onClick={() => setPageNumber(2)} className="border border-gray-300 rounded w-full py-1 px-3 hover:bg-gray-50">Next step</button>
  } else if (pageNumber === 2) {
    pageBox = SecondStep
    back = <button onClick={() => setPageNumber(1)} className="border rounded w-full py-1 px-3 hover:bg-gray-50 text-gray-500">Back</button>
    nextStep = <button onClick={() => setPageNumber(3)} className="border border-gray-300 rounded w-full py-1 px-3 hover:bg-gray-50">Next step</button>
  } else {
    throw new Error();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InitialBox />
      {pageBox({ back, nextStep })}
      <InitialBox />
    </main>
  )
}