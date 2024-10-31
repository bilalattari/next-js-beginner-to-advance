"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(search) {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("q", search);
      replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("q");
      replace(`${pathname}?${params.toString()}`);
    }
  }

  return (
    <input
      className="border p-2 rounded mb-3 flex w-full flex-grow"
      placeholder="Search Post"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("q")?.toString()}
    />
  );
}
