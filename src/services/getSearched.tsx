import { API_BASE, API_KEY } from "@/API";
import { Game } from "@/types";

interface Response {
  results: Game[];
}
export async function getSearched(
  param: string,
): Promise<undefined | Response> {
  try {
    const data = fetch(
      API_BASE + "games" + API_KEY + "&search=" + param + "-name",
    );
    const response = (await data).json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
