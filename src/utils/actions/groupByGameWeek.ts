import { Fixture, Render } from "@/interfaces/Render";
import { getGameWeekLabel } from './getGameWeekLabel';

interface GroupedGameData {
    [key: string]: {
      id: number;
      results: Fixture[];
      upcoming: Fixture[];
    };
  }

// ... (GroupedGameData interface and groupByGameWeek function here)
// Updating groupByGameWeek to include render IDs
export function groupByGameWeek(renderData: Render[]): GroupedGameData {
    const groupedData: GroupedGameData = {};
  
    renderData.forEach((render) => {
      const gameResults = render.attributes.game_results_in_renders.data;
      const upcomingGames = render.attributes.upcoming_games_in_renders.data;
  
      gameResults.forEach((result: Fixture) => {
        const gameWeekLabel = getGameWeekLabel(
          new Date(result.attributes.createdAt)
        );
        if (!groupedData[gameWeekLabel]) {
          groupedData[gameWeekLabel] = {
            id: render.id,
            results: [],
            upcoming: [],
          };
        }
        groupedData[gameWeekLabel].results.push(result);
      });
  
      upcomingGames.forEach((game: Fixture) => {
        const gameWeekLabel = getGameWeekLabel(
          new Date(game.attributes.createdAt)
        );
        if (!groupedData[gameWeekLabel]) {
          groupedData[gameWeekLabel] = {
            id: render.id,
            results: [],
            upcoming: [],
          };
        }
        groupedData[gameWeekLabel].upcoming.push(game);
      });
    });
  
    return groupedData;
  }