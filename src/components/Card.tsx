export default function Card() {
  return (
    <div className=" w-full cursor-pointer space-y-4 rounded-md p-4 shadow-md duration-100 hover:scale-95">
      <div className="h-40 rounded-md bg-dark/20"></div>
      <p className=" text-center">Title of the game</p>
    </div>
  );
}
