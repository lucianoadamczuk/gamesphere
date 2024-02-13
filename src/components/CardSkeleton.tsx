export default function CardSkeleton() {
  return (
    <div className=" w-full cursor-pointer space-y-4 rounded-md p-4 shadow-md duration-100 hover:scale-95">
      <div className="h-40 animate-pulse rounded-md bg-dark/20"></div>
      <div className="h-6 animate-pulse rounded-md bg-dark/20"></div>
    </div>
  );
}
