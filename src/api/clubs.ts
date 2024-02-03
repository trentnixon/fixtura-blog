// pages/api/accounts.ts
import { serverFetcher } from "@/utils/serverFetcher";

const qs = require("qs");
export async function getClubs() {
  const queryParams = qs.stringify(
    {
      filters: {
        accounts: {
          FirstName: {
            $notNull: true,
          },
        },
      },
      populate: ["associations", "Logo", "accounts"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await serverFetcher({
    PATH: `clubs?${queryParams}`,
    nextConfig: { next: { revalidate: 600 } },
  });
  return res.data;
}

export async function getClub(Name: string, Sport: string) {
  const queryParams = qs.stringify(
    {
      filters: {
        Name: {
          $eq: Name,
        },
        Sport: {
          $eq: Sport,
        },
      },
      populate: [
        "associations",
        "Logo",
        "accounts",
        "accounts.scheduler",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await serverFetcher({
    PATH: `clubs?${queryParams}`,
    nextConfig: { next: { revalidate: 600 } },
  });
  return res.data;
}
