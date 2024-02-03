// pages/api/accounts.ts
import { serverFetcher } from "@/utils/serverFetcher";

const qs = require("qs");

export async function getScheduler(ID: number) {
  const queryParams = qs.stringify(
    {
      filters: {
        accounts: {
          FirstName: {
            $notNull: true,
          },
        },
      },
      populate: [
        "renders",
        "renders.upcoming_games_in_renders",
        "renders.game_results_in_renders",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await serverFetcher({
    PATH: `schedulers/${ID}?${queryParams}`,
    nextConfig: { next: { revalidate: 600 } },
  });
  return res.data;
}
