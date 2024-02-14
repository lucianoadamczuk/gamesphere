import { API_BASE, API_KEY } from "@/API";
import { Platforms } from "@/types";

export const getPlatforms = async (): Promise<Platforms[] | undefined> => {
  try {
    const data = await fetch(API_BASE + "platforms" + API_KEY);
    if (!data.ok) {
      console.log("Error getting platforms");
    }
    const response = await data.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
};
