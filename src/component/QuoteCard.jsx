const QuoteCard = ({ author, quote }) => {
  return (
    <div className="border m-5 border-pink-200 p-5">
      <h1 className="font-semibold text-2xl">{quote}</h1>
      <h1 className="font-normal text-xl">
        Quote by <span className="underline font-bold">{author}</span>
      </h1>
    </div>
  );
};

export default QuoteCard;
