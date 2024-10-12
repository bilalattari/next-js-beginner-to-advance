import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container mx-auto text-center p-20">
      <h1 className="font-bold text-5xl"> Dashboard</h1>

      <div className="flex gap-4">
        <Link href={"/dashboard/settings"}>
          <button className="bg-purple-400 p-2 px-4 rounded text-white">
            Settings
          </button>
        </Link>
        <Link href={"/dashboard/profile"}>
          <button className="bg-purple-400 p-2 px-4 rounded text-white">
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
