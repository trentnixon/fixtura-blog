import { getClub } from "@/api/clubs";
import { getRender } from "@/api/renders";
import { Render } from "@/interfaces/Render";

interface PageProps {
  params: { sport: string; account: string; render: number };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const useRender: Render = await getRender(params.render);
  const fetchClub = await getClub(
    decodeURI(params.account),
    decodeURI(params.sport)
  );
  console.log(fetchClub[0])
  console.log(useRender);
  // Fetch render details based on the ID
  // Example: const renderDetails = await fetchRenderDetails(id);

  return (
    <div>
      <h1>Render Details for ID: {params.render}</h1>
      show weeks of render

      group options by  age groups or grades/comps
    


    </div>
  );
};

export default Page;
