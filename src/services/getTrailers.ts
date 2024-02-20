import { API_BASE, API_KEY } from "@/API";
import { Trailer } from "@/types";

export const getTrailers = async (
  slug: string,
): Promise<undefined | Trailer[]> => {
  try {
    const data = await fetch(API_BASE + "games/" + slug + "/movies" + API_KEY);
    if (!data.ok) {
      console.log("Error getting trailers");
    }
    const response = await data.json();
    return response?.results;
  } catch (error) {
    console.log(error);
  }
};
