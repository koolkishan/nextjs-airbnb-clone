import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LISTING_TITLE_FIELD } from "./ListingTitle";
import { TRIP_TITLE_FIELD } from "../trip/TripTitle";
import { WISHLIST_TITLE_FIELD } from "../wishlist/WishlistTitle";

export const ListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="locationData" source="locationData" />
        <TextField label="locationType" source="locationType" />
        <TextField label="mapData" source="mapData" />
        <TextField label="photos" source="photos" />
        <TextField label="placeAmeneites" source="placeAmeneites" />
        <TextField label="placeSpace" source="placeSpace" />
        <TextField label="placetype" source="placetype" />
        <TextField label="price" source="price" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="listingsId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="listings"
              source="listing.id"
              reference="Listing"
            >
              <TextField source={LISTING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <ReferenceField label="trips" source="trip.id" reference="Trip">
              <TextField source={TRIP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <ReferenceField
              label="wishlists"
              source="wishlist.id"
              reference="Wishlist"
            >
              <TextField source={WISHLIST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
