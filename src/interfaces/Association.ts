export interface AssociationAttributes {
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    PlayHQID: string;
    href: string;
    ParentLogo: string;
    website: string | null;
    location: string | null;
    contactDetails: string | null;
    hasPlayhqLogoStored: boolean;
    Sport: string;
    competitions: CompetitionType[]; // Replace with the actual type
    Logo: LogoType; // Replace with the actual type
    accounts: AccountType[]; // Replace with the actual type
  }
  
export  interface Association {
    id: number;
    attributes: AssociationAttributes;
  }
  
  // Placeholder interfaces - replace these with the actual structures of your data
  interface CompetitionType {}
  interface LogoType {}
  interface AccountType {}
  