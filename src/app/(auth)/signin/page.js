import { auth, signIn } from "@/app/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session?.user) redirect("/");
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
        revalidatePath("/login");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
