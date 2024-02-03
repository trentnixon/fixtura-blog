// interfaces/Render.ts

export interface Render {
  id: number;
  attributes: RenderAttributes;
}

export interface RenderAttributes {
  Name: string;
  Processing: boolean;
  Complete: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  zipLocation: string | null;
  sendEmail: boolean;
  hasTeamRosterRequest: boolean;
  hasTeamRosters: boolean;
  game_results_in_renders: {
    data: Fixture[];
  };
  upcoming_games_in_renders: {
    data: Fixture[];
  };
}

export interface Fixture {
  id: number;
  attributes: GameAttributes;
}
export interface GameAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}