/**
 * Page Component
 *
 * Developer Notes:
 * - This component is responsible for fetching club and scheduler data based on the sport and account.
 * - It groups renders by game weeks and displays them.
 * - Uses the 'groupByGameWeek' utility to process the render data.
 *
 * @param {PageProps} params - Contains sport and account information for data fetching.
 * @returns React Functional Component
 */

import { getScheduler } from "@/api/scheduler";
import { getClub } from "@/api/clubs";
import { groupByGameWeek } from "@/utils/actions/groupByGameWeek";
import GameWeek from "@/components/pages/Renders/GameWeek";

interface PageProps {
  params: { sport: string; account: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  try {
    const fetchClub = await getClub(
      decodeURI(params.account),
      decodeURI(params.sport)
    );
    const useClub = fetchClub[0].attributes;
    const schedulerID = useClub.accounts.data[0].attributes.scheduler.data.id;
    const useScheduler = await getScheduler(schedulerID);

    const useRenders = useScheduler.attributes.renders.data;
    const groupedData = groupByGameWeek(useRenders);

    return (
      <div className="mx-6 mt-8 grid grid-cols-3 gap-5">
        {Object.entries(groupedData).map(([weekLabel, weekData]) => (
          <GameWeek
            key={weekLabel}
            weekLabel={weekLabel}
            weekData={weekData}
            sport={params.sport}
            account={params.account}
          />
        ))}
      </div>
    );
  } catch (error) {
    // TODO: Implement a more user-friendly error display
    console.error("Error fetching data:", error);
    return <div>Failed to load data. Please try again later.</div>;
  }
};

export default Page;

// TODO:
// - Consider implementing pagination or load more functionality for large sets of data.
// - Add unit tests to ensure component reliability.
// - Evaluate and optimize performance, especially for larger data sets.
// - Consider adding more interactive elements for a better user experience (e.g., filters, search functionality).
