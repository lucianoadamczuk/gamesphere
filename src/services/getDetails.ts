import { API_BASE, API_KEY } from "@/API";
import { Details } from "@/types";

export const getDetails = async (
  slug: string,
): Promise<Details | undefined> => {
  try {
    const data = await fetch(API_BASE + "games/" + slug + API_KEY);
    if (!data.ok) {
      console.log("Error getting details");
    }
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
