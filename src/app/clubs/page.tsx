// Assuming the Account interface is defined correctly in "@/interfaces/Account"

import { Association } from "@/interfaces/Association";
import { Club } from "@/interfaces/Clubs";
import {
  AssociationCard,
  ClubCard,
} from "@/components/Prefab/Cards/AccountCard";
import { getClubs } from "@/api/clubs";
import { getAsociations } from "@/api/associations";
import { H1 } from "@/components/ui/type";

export default async function Page() {
  const associations = await getAsociations();
  const clubs = await getClubs();

  return (
    <>

      <H1>Clubs</H1>
      <div className="mx-6 mt-8 grid grid-cols-3 gap-5">
        {clubs.map((club: Club, i: number) => (
          <ClubCard key={i} club={club} />
        ))}
      </div>
    </>
  );
}
