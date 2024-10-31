import { auth, signOut } from "@/app/auth";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  console.log("session?.user=>", session);
  return (
    <div className="flex justify-between p-4 bg-purple-200">
      <h1>ABC Logo</h1>
      {!session?.user ? (
        <Link href={"/signin"} className="bg-black text-white p-2 rounded">
          <h1>Login</h1>{" "}
        </Link>
      ) : (
        <div className="flex gap-2">
          <h1>{session?.user?.email}</h1>
          <div className="h-[40px] w-[40px] rounded-full">
            <Image src={session.user.picture} height={40} width={40} className="rounded-full" />
          </div>
          <form
            action={async () => {
              "use server";
              await signOut();
              revalidatePath("/");
            }}
          >
            {" "}
            <input type="submit" value={"lOGOUT"} />
          </form>
        </div>
      )}
    </div>
  );
}
