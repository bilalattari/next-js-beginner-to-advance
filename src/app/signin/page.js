import Image from "next/image";
import { auth, signIn, signOut } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex items-center justify-center container mx-auto min-h-screen">
      {session ? (
        <div className="flex flex-col p-10 gap-2 items-center shadow rounded">
          <Image
            src={session?.user?.image}
            height={100}
            width={100}
            className="rounded-full"
          />

          <h1 className="font-bold">{session?.user?.name}</h1>
          <h1>{session?.user?.email}</h1>

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
        <div>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit">Signin with Google</button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">Signin with Github</button>
          </form>
        </div>
      )}
    </div>
  );
}
