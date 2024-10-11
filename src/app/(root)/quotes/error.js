"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("error==>", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center gap-4 flex-col">
      <Image
        src={require("../../assets/erroricon.png")}
        height={200}
        width={200}
      />
      <h2 className="font-bold text-2xl">{error.message}</h2>
      <button
       className="bg-blue-100 p-2 px-3 rounded-md "
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
