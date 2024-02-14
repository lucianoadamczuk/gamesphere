import { API_BASE, API_KEY } from "@/API";
import { Game } from "@/types";

export const getGames = async ({
  genre,
  platform,
  page,
  ordering,
}: {
  genre: string;
  platform: string;
  page: string;
  ordering: string;
}): Promise<Game[] | undefined> => {
  try {
    const data = await fetch(
      API_BASE +
        "games" +
        API_KEY +
        `&genres=${genre}` +
        `&platforms=${platform}` +
        `&page=${page}` +
        `&ordering=${ordering}`,
    );
    if (!data.ok) {
      console.log("Error getting games");
    }
    const response = await data.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
};
