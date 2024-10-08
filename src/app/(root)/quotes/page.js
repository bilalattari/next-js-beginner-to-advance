import QuoteCard from "@/component/QuoteCard";
import Link from "next/link";

export const metadata = {
  title: "Quotes",
};

const Quotes = async () => {
  let quotes = await fetch("https://dummyjson.com/quotes", {
    cache: "no-cache",
  });

  if (!quotes.ok) {
    throw new Error("API is not working");
  }

  quotes = await quotes.json();
  console.log(quotes);
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl text-center ">Quotes</h1>
      {quotes.quotes.map((data) => (
        <Link key={data.id} href={`/quotes/${data.id}`}>
          <QuoteCard author={data.author} quote={data.quote} />
        </Link>
      ))}
    </div>
  );
};

export default Quotes;

// export default async function Quotes(){

//     return(
//         <div className="p-10">
//             <h1 className="font-bold text-3xl text-center ">Quotes</h1>
//         </div>
//     )
// }

// const Quotes = async () => {
//     let quotes = await fetch("https://dummyjson.com/quotes/random", {
//       cache : "no-cache"
//     });
//     quotes = await quotes.json();
//     return (
//       <div className="p-10">
//         <h1 className="font-bold text-3xl text-center ">Quotes</h1>
//         {/* {quotes.quotes.map((data) => (
//           <Link key={data.id} href={`/quotes/${data.id}`}> */}
//             <QuoteCard author={quotes.author} quote={quotes.quote} />
//           {/* </Link> */}
//         {/* ))} */}
//       </div>
//     );
//   };
