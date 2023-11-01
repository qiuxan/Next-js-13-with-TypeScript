import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";

export default async function Home() {
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
    </main>
  );
}
