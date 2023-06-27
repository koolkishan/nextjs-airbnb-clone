import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "id";

export const ListingTitle = (record: TListing): string => {
  return record.id || String(record.id);
};
