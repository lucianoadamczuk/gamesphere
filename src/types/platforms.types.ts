export interface Platforms {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: any;
  year_start?: number;
  year_end?: any;
  games: Game[];
}

interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}
