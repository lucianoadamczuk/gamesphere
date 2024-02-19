import { API_BASE, API_KEY } from "@/API";

export const getTrailers = async ({
  slug,
}: {
  slug: string;
}): Promise<undefined> => {
  try {
    const data = await fetch(
      API_BASE + "games/" + { slug } + "/movies" + API_KEY,
    );
    if (!data.ok) {
      console.log("Error getting trailers");
    }
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
