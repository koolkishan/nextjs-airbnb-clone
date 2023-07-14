import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TripTitle } from "../trip/TripTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="listingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <div />
        <TextInput label="placetype" source="placetype" />
        <NumberInput step={1} label="price" source="price" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="trips.id" reference="Trip" label="trips">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="wishlists.id"
          reference="Wishlist"
          label="wishlists"
        >
          <SelectInput optionText={WishlistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
