import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="font-semibold text-3xl text-center ">Sorry this Quote Not Found</h1>

      <Link
        href={"/quotes"}
        className="bg-purple-400 p-2 px-4 rounded text-white"
      >
        See All Quotes Available
      </Link>
    </div>
  );
}
