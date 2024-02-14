export default function CardSkeleton() {
  return (
    <div className=" w-full cursor-pointer space-y-4 rounded-md bg-dark-soft p-4 shadow-md shadow-dark duration-100 hover:scale-105 active:scale-95">
      <div className="h-40 animate-pulse rounded-md bg-dark/20"></div>
      <div className="h-6 animate-pulse rounded-md bg-dark/20"></div>
    </div>
  );
}
