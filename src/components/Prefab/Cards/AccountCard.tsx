import { BTN_LINK } from "@/components/Prefab/Cards/buttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Account } from "@/interfaces/Account";
import { Association } from "@/interfaces/Association";
import { Club } from "@/interfaces/Clubs";

interface AccountCardProps {
  account: Account;
}

interface AssociationCardProps {
  association: Association;
}

interface ClubCardProps {
  club: Club;
}

export const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const { attributes } = account;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{attributes.FirstName}</CardTitle>
        <CardDescription></CardDescription>
        <CardDescription>{attributes.Sport}</CardDescription>
      </CardHeader>
      <CardContent>
        <BTN_LINK href={`${attributes.Sport}/${attributes.FirstName}`}>
          View
        </BTN_LINK>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export const AssociationCard: React.FC<AssociationCardProps> = ({
  association,
}) => {
  const { attributes } = association;
  console.log(attributes);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{attributes.Name}</CardTitle>
        <CardDescription>Association</CardDescription>
        <CardDescription>{attributes.Sport}</CardDescription>
      </CardHeader>
      <CardContent>
        <BTN_LINK href={`${attributes.Sport}/${attributes.Name}`}>
          View
        </BTN_LINK>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const { attributes } = club;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{attributes.Name}</CardTitle>
        <CardDescription>Club</CardDescription>
        <CardDescription>{attributes.Sport}</CardDescription>
      </CardHeader>
      <CardContent>
        <BTN_LINK href={`${attributes.Sport}/${attributes.Name}`}>
          View
        </BTN_LINK>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
