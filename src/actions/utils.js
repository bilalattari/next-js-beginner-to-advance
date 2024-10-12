"use server"
import { revalidateTag } from "next/cache";
export async function refetch() {
  await revalidateTag("quotes");
}
