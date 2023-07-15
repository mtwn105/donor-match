/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateDonor: OnCreateDonorSubscription;
  onUpdateDonor: OnUpdateDonorSubscription;
  onDeleteDonor: OnDeleteDonorSubscription;
};

export type CreateDonorInput = {
  id?: string | null;
  donor_name: string;
  blood_group: string;
};

export type ModelDonorConditionInput = {
  donor_name?: ModelStringInput | null;
  blood_group?: ModelStringInput | null;
  and?: Array<ModelDonorConditionInput | null> | null;
  or?: Array<ModelDonorConditionInput | null> | null;
  not?: ModelDonorConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Donor = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDonorInput = {
  id: string;
  donor_name?: string | null;
  blood_group?: string | null;
};

export type DeleteDonorInput = {
  id: string;
};

export type ModelDonorFilterInput = {
  id?: ModelIDInput | null;
  donor_name?: ModelStringInput | null;
  blood_group?: ModelStringInput | null;
  and?: Array<ModelDonorFilterInput | null> | null;
  or?: Array<ModelDonorFilterInput | null> | null;
  not?: ModelDonorFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelDonorConnection = {
  __typename: "ModelDonorConnection";
  items: Array<Donor | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionDonorFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  donor_name?: ModelSubscriptionStringInput | null;
  blood_group?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDonorFilterInput | null> | null;
  or?: Array<ModelSubscriptionDonorFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateDonorMutation = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDonorMutation = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDonorMutation = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

export type GetDonorQuery = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

export type ListDonorsQuery = {
  __typename: "ModelDonorConnection";
  items: Array<{
    __typename: "Donor";
    id: string;
    donor_name: string;
    blood_group: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateDonorSubscription = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDonorSubscription = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDonorSubscription = {
  __typename: "Donor";
  id: string;
  donor_name: string;
  blood_group: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDonor(
    input: CreateDonorInput,
    condition?: ModelDonorConditionInput
  ): Promise<CreateDonorMutation> {
    const statement = `mutation CreateDonor($input: CreateDonorInput!, $condition: ModelDonorConditionInput) {
        createDonor(input: $input, condition: $condition) {
          __typename
          id
          donor_name
          blood_group
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDonorMutation>response.data.createDonor;
  }
  async UpdateDonor(
    input: UpdateDonorInput,
    condition?: ModelDonorConditionInput
  ): Promise<UpdateDonorMutation> {
    const statement = `mutation UpdateDonor($input: UpdateDonorInput!, $condition: ModelDonorConditionInput) {
        updateDonor(input: $input, condition: $condition) {
          __typename
          id
          donor_name
          blood_group
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDonorMutation>response.data.updateDonor;
  }
  async DeleteDonor(
    input: DeleteDonorInput,
    condition?: ModelDonorConditionInput
  ): Promise<DeleteDonorMutation> {
    const statement = `mutation DeleteDonor($input: DeleteDonorInput!, $condition: ModelDonorConditionInput) {
        deleteDonor(input: $input, condition: $condition) {
          __typename
          id
          donor_name
          blood_group
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDonorMutation>response.data.deleteDonor;
  }
  async GetDonor(id: string): Promise<GetDonorQuery> {
    const statement = `query GetDonor($id: ID!) {
        getDonor(id: $id) {
          __typename
          id
          donor_name
          blood_group
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDonorQuery>response.data.getDonor;
  }
  async ListDonors(
    filter?: ModelDonorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDonorsQuery> {
    const statement = `query ListDonors($filter: ModelDonorFilterInput, $limit: Int, $nextToken: String) {
        listDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            donor_name
            blood_group
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDonorsQuery>response.data.listDonors;
  }
  OnCreateDonorListener(
    filter?: ModelSubscriptionDonorFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDonor">>
  > {
    const statement = `subscription OnCreateDonor($filter: ModelSubscriptionDonorFilterInput) {
        onCreateDonor(filter: $filter) {
          __typename
          id
          donor_name
          blood_group
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDonor">>
    >;
  }

  OnUpdateDonorListener(
    filter?: ModelSubscriptionDonorFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDonor">>
  > {
    const statement = `subscription OnUpdateDonor($filter: ModelSubscriptionDonorFilterInput) {
        onUpdateDonor(filter: $filter) {
          __typename
          id
          donor_name
          blood_group
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDonor">>
    >;
  }

  OnDeleteDonorListener(
    filter?: ModelSubscriptionDonorFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDonor">>
  > {
    const statement = `subscription OnDeleteDonor($filter: ModelSubscriptionDonorFilterInput) {
        onDeleteDonor(filter: $filter) {
          __typename
          id
          donor_name
          blood_group
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDonor">>
    >;
  }
}
