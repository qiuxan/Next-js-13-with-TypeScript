"use client";

import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
// import HeavyComponent from "./components/HeavyComponent";
import dynamic from "next/dynamic";
// import _ from "lodash";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <Image
        fill
        src="https://bit.ly/react-cover"
        alt="coffee image"
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"
        quality={80}
        priority
      /> */}
      <h1
      // className="font-poppins"
      >
        Hello world
      </h1>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Show
      </button>
      {isVisible && <HeavyComponent />}

      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [
            { name: "cohn", age: 20 },
            { name: "bane", age: 30 },
            { name: "aoe", age: 40 },
          ];
          const sortedUsers = _.sortBy(users, "name");
          console.log(
            "🚀 ~ file: page.tsx:49 ~ Home ~ sortedUsers:",
            sortedUsers
          );
        }}
      >
        Log Array
      </button>
    </main>
  );
}
