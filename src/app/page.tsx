// Assuming the Account interface is defined correctly in "@/interfaces/Account"

import { getClubs } from "@/api/clubs";
import { getAsociations } from "@/api/associations";
import { H1 } from "@/components/ui/type";
import { BTN_LINK } from "@/components/Prefab/Cards/buttons";
import { MainNav } from "@/components/Structure/main-nav";

export default async function Page() {
  const associations = await getAsociations();
  const clubs = await getClubs();

  return (
    <>
      <MainNav />
      <main className="bg-zinc-200 text-foreground  min-h-screen items-center justify-between ">
        <H1>Associations</H1>
        <BTN_LINK href="/associations">Associations</BTN_LINK>
        <H1>Clubs</H1>
        <BTN_LINK href="/clubs">Clubs</BTN_LINK>
      </main>
    </>
  );
}
