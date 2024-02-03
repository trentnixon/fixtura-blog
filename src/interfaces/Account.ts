// Define placeholder interfaces for complex objects
// Replace these with more detailed interfaces as per your actual data structure
interface UserType {}
interface AccountType {}
interface SubscriptionTierType {}
interface ClubsType {}
interface AssociationsType {}
interface OrderType {}

export interface AccountAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isActive: boolean;
  FirstName: string;
  LastName: string | null;
  DeliveryAddress: string;
  isSetup: boolean;
  isUpdating: boolean;
  hasCompletedStartSequence: boolean;
  isRightsHolder: boolean;
  isPermissionGiven: boolean;
  group_assets_by: boolean;
  Sport: string;
  user: UserType; // Replace with the actual type
  account_type: AccountType; // Replace with the actual type
  subscription_tier: SubscriptionTierType; // Replace with the actual type
  clubs: ClubsType; // Replace with the actual type
  associations: AssociationsType; // Replace with the actual type
  order: OrderType; // Replace with the actual type
}

export interface Account {
  id: number;
  attributes: AccountAttributes;
}
