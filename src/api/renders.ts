// pages/api/accounts.ts
import { serverFetcher } from "@/utils/serverFetcher";

const qs = require("qs");

export async function getRender(ID: number) {
  const queryParams = qs.stringify(
    {
      populate: [
        "game_results_in_renders",
        "upcoming_games_in_renders",
        "downloads",
        "gtp_3_reports"
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await serverFetcher({
    PATH: `renders/${ID}?${queryParams}`,
    nextConfig: { next: { revalidate: 600 } },
  });
  return res.data;
}
