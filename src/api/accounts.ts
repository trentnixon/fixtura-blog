// pages/api/accounts.ts
import { serverFetcher } from '@/utils/serverFetcher';

const qs = require("qs");
export async function getAccounts() {
    const queryParams = qs.stringify(
      {
        populate: [
          "user",
          "account_type",
          "subscription_tier",
          "clubs",
          "associations",
          "order",
        ],
      },
      {
        encodeValuesOnly: true,
      }
    );
  
    const res = await serverFetcher({
      PATH: `accounts?${queryParams}`,
      nextConfig: { next: { revalidate: 600 } },
    });
    return res.data;
  }
