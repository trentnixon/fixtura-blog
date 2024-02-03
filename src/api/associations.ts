// pages/api/associations.ts
import { serverFetcher } from "@/utils/serverFetcher";

const qs = require("qs");
export async function getAsociations() {
  const queryParams = qs.stringify(
    {
      filters: {
        accounts: {
          FirstName: {
            $notNull: true,
          },
        },
      },
      populate: ["competitions", "Logo", "accounts"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await serverFetcher({
    PATH: `associations?${queryParams}`,
    nextConfig: { next: { revalidate: 600 } },
  });
  return res.data;
}
