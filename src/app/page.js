import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-5xl">HELLO WORLD!</h1>

      <Link href={"/dashboard"}>
        <button className="bg-purple-400 p-2 px-4 rounded text-white">
          Dashboard
        </button>
      </Link>
      <Link href={"/blogs"}>
        <button className="bg-purple-400 p-2 px-4 rounded text-white">
          See all blogs
        </button>
      </Link>
      <Link href={"/contactus"}>
        <button className="bg-purple-400 p-2 px-4 rounded text-white">
          Contact Us
        </button>
      </Link>
      <Link href={"/aboutus"}>
        <button className="bg-purple-400 p-2 px-4 rounded text-white">
          About Us
        </button>
      </Link>
    </div>
  );
}
