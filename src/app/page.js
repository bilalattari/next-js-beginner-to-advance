import Link from "next/link";
import { auth, signOut } from "../../auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8   font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-5xl my-2">HELLO NEXT AUTH</h1>

      {session ? (
        <div>
          <h1>User is Login with <span className="font-bold">{session.user.email}</span> </h1>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </div>
      ) : (
        <Link href={"/signin"}>Login To Continue</Link>
      )}
    </div>
  );
}
