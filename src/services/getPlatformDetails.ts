import { API_BASE, API_KEY } from "@/API";
import { PlatformDetails } from "@/types";

export const getPlatformDetails = async (
  id: string,
): Promise<PlatformDetails | undefined> => {
  try {
    const data = await fetch(API_BASE + "platforms/" + id + API_KEY);
    if (!data.ok) {
      console.log("Error getting platform details");
    }
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
