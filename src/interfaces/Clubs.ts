export interface ClubAttributes {
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    PlayHQID: string;
    href: string;
    ParentLogo: string;
    website: WebsiteType | null; // Replace with the actual type
    location: LocationType | null; // Replace with the actual type
    contactDetails: ContactDetailsType[]; // Replace with the actual type
    hasPlayhqLogoStored: boolean;
    Sport: string;
    associations: AssociationType[]; // Replace with the actual type
    Logo: LogoType; // Replace with the actual type
    accounts: AccountType[]; // Replace with the actual type
  }
  
  export interface Club {
    id: number;
    attributes: ClubAttributes;
  }
  
  // Placeholder interfaces - replace these with the actual structures of your data
  interface WebsiteType {}
  interface LocationType {}
  interface ContactDetailsType {}
  interface AssociationType {}
  interface LogoType {}
  interface AccountType {}
  