import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-favorites.svg" height={140} width={140} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">No favourite boards!</h2>
      <p className="text-muteed-foreground text-sm mt-2">
        Try adding a board to favourites
      </p>
    </div>
  );
};
