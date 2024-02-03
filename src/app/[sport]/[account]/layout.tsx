import { getClub } from "@/api/clubs";
import { BTN_LINK } from "@/components/Prefab/Cards/buttons";
import Image from "next/image";

interface PageProps {
  params: { sport: string; account: string; render: number };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: PageProps["params"]; // Use the 'params' from PageProps
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const fetchClub = await getClub(
    decodeURI(params.account),
    decodeURI(params.sport)
  );

  console.log("params in params", params);
  const useClub = fetchClub[0].attributes;
  return (
    <div className="bg-zinc-200 text-foreground min-h-screen flex flex-col justify-between">
      <div className="flex">
        <div className="w-2/12 bg-gray-100 p-4">
          <SideBar
            useClub={useClub}
            params={params}
            Name={decodeURI(params.account)}
          />
        </div>

        <div className="w-10/12">
          <div className="bg-gray-100 p-4">Top row content here</div>

          <div className="bg-gray-100 p-4 mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface SideBarProps {
  useClub: useClub;
  Name: string;
  params: { sport: string; account: string; render: number };
}
interface useClub {
  Logo: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}
function SideBar(props: SideBarProps) {
  const { useClub, Name, params } = props;
  const { sport, account, render } = params;
  return (
    <div className="flex w-64 shrink-0 flex-col bg-layer-2">
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* Logo */}
        <div className="mt-5 flex-shrink-0 px-4 text-heading">
          <Image
            src={useClub.Logo.data.attributes.url}
            width={useClub.Logo.data.attributes.width}
            height={useClub.Logo.data.attributes.height}
            alt={""}
          />
          {Name}
        </div>
        <div className="mt-5 space-y-1 px-1 sm:px-2">
          <BTN_LINK href={`/${sport}/${account}`}>Fixture Weeks</BTN_LINK>
          <p>{sport}</p>
          <p>{account}</p>
          <p>{render}</p>
        </div>
      </div>
    </div>
  );
}
