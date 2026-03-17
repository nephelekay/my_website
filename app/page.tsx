import Image from "next/image";
import Link from "next/link";
import Welcome from "./components/welcome";
import Homepics from "./components/homepics";

export default function Home() {
  return (
    <div className="bg-[#E9E4D3] min-h-screen relative">
      <div className="flex flex-row gap-4 justify-end p-6">
        <Link href="/projects">WORK</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
      <div className="pt-24 relative flex flex-col items-center">
        <Welcome />
      </div>
      <div className="mt-16">
        <Homepics />
      </div>
    </div>
  );
}