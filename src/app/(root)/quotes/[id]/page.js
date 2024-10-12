import { notFound } from "next/navigation";

export default async function SingleQuote({ params }) {
  let singleQuote = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  singleQuote = await singleQuote.json();

  console.log("singleQuote=>", singleQuote);
  if (singleQuote.message) {
    notFound();
  }

  return (
    <div className="p-10">
      <h1 className="text-center text-5xl font-mono leading-[70px] my-10">
        {singleQuote.quote}
      </h1>
      <h1 className="font-thin text-center text-2xl">
        Quote By{" "}
        <span className="underline font-bold">{singleQuote.author}</span>
      </h1>
    </div>
  );
}
