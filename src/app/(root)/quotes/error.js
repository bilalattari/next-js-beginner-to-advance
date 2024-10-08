"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center p-20 flex-col">
      <h2  className="text-4xl text-red-500">{error.message}!</h2>
      <button
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
