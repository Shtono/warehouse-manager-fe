import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Container = {
  __typename?: 'Container';
  created_at: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  movement_logs: Array<MovementLog>;
  product: Product;
  product_id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  size: Scalars['Float']['output'];
  /** ACTIVE | ARCHIVED */
  state: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
  warehouse: Warehouse;
  warehouse_id: Scalars['Int']['output'];
};

export type Customer = {
  __typename?: 'Customer';
  created_at: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
  warehouses: Array<Warehouse>;
};

export type Error = {
  __typename?: 'Error';
  error: Scalars['String']['output'];
};

export type MovementLog = {
  __typename?: 'MovementLog';
  container: Container;
  container_id: Scalars['ID']['output'];
  created_at: Scalars['Date']['output'];
  customer: Customer;
  customer_id: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  movement_type: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  warehouse: Warehouse;
  warehouse_current_capacity: Scalars['Int']['output'];
  warehouse_id: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add stock to a warehouse. Returns the updated warehouse. */
  addStockToWarehouse: MutationAddStockToWarehouseResult;
  /** Create a new customer */
  createCustomer: Customer;
  /** Create a new product */
  createProduct: Product;
  /** Create a new warehouse */
  createWarehouse: Warehouse;
  /** Delete a customer */
  deleteCustomer: Customer;
  /** Delete a product */
  deleteProduct: Product;
  /** Delete a warehouse */
  deleteWarehouse: Warehouse;
  /** Remove stock from a warehouse. Returns the updated warehouse. */
  removeStockFromWarehouse: MutationRemoveStockFromWarehouseResult;
  /** Update a customer */
  updateCustomer: Customer;
  /** Update a product */
  updateProduct: Product;
  /** Update a warehouse */
  updateWarehouse: Warehouse;
};


export type MutationAddStockToWarehouseArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  product_id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  warehouse_id: Scalars['Int']['input'];
};


export type MutationCreateCustomerArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationCreateProductArgs = {
  customer_id: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  hazardous: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  size: Scalars['Float']['input'];
};


export type MutationCreateWarehouseArgs = {
  capacity: Scalars['Float']['input'];
  customer_id: Scalars['Int']['input'];
  hazardous: Scalars['Boolean']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveStockFromWarehouseArgs = {
  container_id: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  warehouse_id: Scalars['Int']['input'];
};


export type MutationUpdateCustomerArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  hazardous?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateWarehouseArgs = {
  capacity?: InputMaybe<Scalars['Float']['input']>;
  hazardous?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAddStockToWarehouseResult = Error | MutationAddStockToWarehouseSuccess;

export type MutationAddStockToWarehouseSuccess = {
  __typename?: 'MutationAddStockToWarehouseSuccess';
  data: Warehouse;
};

export type MutationRemoveStockFromWarehouseResult = Error | MutationRemoveStockFromWarehouseSuccess;

export type MutationRemoveStockFromWarehouseSuccess = {
  __typename?: 'MutationRemoveStockFromWarehouseSuccess';
  data: Warehouse;
};

export type Product = {
  __typename?: 'Product';
  containers: Array<Container>;
  created_at: Scalars['Date']['output'];
  customer: Customer;
  customer_id: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  hazardous: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  size: Scalars['Float']['output'];
  updated_at: Scalars['Date']['output'];
};

export type Query = {
  __typename?: 'Query';
  container: Container;
  containers: Array<Container>;
  customer: Customer;
  customers: Array<Customer>;
  movementLog: MovementLog;
  movementLogs: Array<MovementLog>;
  product: Product;
  products: Array<Product>;
  warehouse: Warehouse;
  warehouses: Array<Warehouse>;
};


export type QueryContainerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryContainersArgs = {
  warehouse_id: Scalars['Int']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMovementLogArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductsArgs = {
  customer_id: Scalars['Int']['input'];
};


export type QueryWarehouseArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWarehousesArgs = {
  customer_id: Scalars['Int']['input'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  capacity: Scalars['Float']['output'];
  containers: Array<Container>;
  created_at: Scalars['Date']['output'];
  current_capacity: Scalars['Float']['output'];
  customer: Customer;
  customer_id: Scalars['Int']['output'];
  hazardous: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  movement_logs: Array<MovementLog>;
  name: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
};

export type WarehouseInput = {
  capacity: Scalars['Int']['input'];
  current_capacity: Scalars['Int']['input'];
  customer_id: Scalars['Int']['input'];
  hazardous: Scalars['Boolean']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
};

export type GetWarehouseContainersQueryVariables = Exact<{
  warehouseId: Scalars['Int']['input'];
}>;


export type GetWarehouseContainersQuery = { __typename?: 'Query', containers: Array<{ __typename?: 'Container', state: string, id: string, quantity: number, size: number, product: { __typename?: 'Product', id: string, name: string } }> };

export type CreateProductMutationMutationVariables = Exact<{
  customerId: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  hazardous: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  size: Scalars['Float']['input'];
}>;


export type CreateProductMutationMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, name: string } };

export type DeleteProductMutationVariables = Exact<{
  deleteProductId: Scalars['Int']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'Product', id: string, name: string } };

export type ProductOptionsQueryVariables = Exact<{
  customerId: Scalars['Int']['input'];
}>;


export type ProductOptionsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, hazardous: boolean }> };

export type ProductsTableQueryQueryVariables = Exact<{
  customerId: Scalars['Int']['input'];
}>;


export type ProductsTableQueryQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, size: number, hazardous: boolean, created_at: any, updated_at: any, containers: Array<{ __typename?: 'Container', quantity: number, size: number, state: string, warehouse: { __typename?: 'Warehouse', id: string, name: string, current_capacity: number, capacity: number } }> }> };

export type AddStockToWarehouseMutationVariables = Exact<{
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  warehouseId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddStockToWarehouseMutation = { __typename?: 'Mutation', addStockToWarehouse: { __typename?: 'Error', error: string } | { __typename?: 'MutationAddStockToWarehouseSuccess', data: { __typename?: 'Warehouse', id: string } } };

export type CreateWarehouseMutationVariables = Exact<{
  capacity: Scalars['Float']['input'];
  customerId: Scalars['Int']['input'];
  hazardous: Scalars['Boolean']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateWarehouseMutation = { __typename?: 'Mutation', createWarehouse: { __typename?: 'Warehouse', id: string, name: string } };

export type DeleteWarehouseMutationVariables = Exact<{
  deleteWarehouseId: Scalars['Int']['input'];
}>;


export type DeleteWarehouseMutation = { __typename?: 'Mutation', deleteWarehouse: { __typename?: 'Warehouse', id: string, name: string } };

export type RemoveStockFromWarehouseMutationVariables = Exact<{
  containerId: Scalars['Int']['input'];
  warehouseId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type RemoveStockFromWarehouseMutation = { __typename?: 'Mutation', removeStockFromWarehouse: { __typename?: 'Error', error: string } | { __typename?: 'MutationRemoveStockFromWarehouseSuccess', data: { __typename?: 'Warehouse', id: string } } };

export type WarehouseInfoQueryVariables = Exact<{
  customerId: Scalars['Int']['input'];
}>;


export type WarehouseInfoQuery = { __typename?: 'Query', warehouses: Array<{ __typename?: 'Warehouse', id: string, name: string, current_capacity: number, capacity: number, hazardous: boolean, location: string, movement_logs: Array<{ __typename?: 'MovementLog', created_at: any, description: string, id: string, movement_type: string, quantity: number, warehouse_current_capacity: number }> }> };

export type WarehousesQueryVariables = Exact<{
  customerId: Scalars['Int']['input'];
}>;


export type WarehousesQuery = { __typename?: 'Query', warehouses: Array<{ __typename?: 'Warehouse', capacity: number, current_capacity: number, customer_id: number, hazardous: boolean, id: string, location: string, name: string }> };

export type WarehousesTableDataQueryVariables = Exact<{
  customerId: Scalars['Int']['input'];
}>;


export type WarehousesTableDataQuery = { __typename?: 'Query', warehouses: Array<{ __typename?: 'Warehouse', id: string, name: string, location: string, capacity: number, current_capacity: number, hazardous: boolean, created_at: any, updated_at: any, containers: Array<{ __typename?: 'Container', id: string, size: number, quantity: number, state: string, product: { __typename?: 'Product', id: string, hazardous: boolean, name: string, price: number, description: string } }> }> };


export const GetWarehouseContainersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWarehouseContainers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"containers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"warehouse_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetWarehouseContainersQuery, GetWarehouseContainersQueryVariables>;
export const CreateProductMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hazardous"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"hazardous"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hazardous"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutationMutation, CreateProductMutationMutationVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const ProductOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"hazardous"}}]}}]}}]} as unknown as DocumentNode<ProductOptionsQuery, ProductOptionsQueryVariables>;
export const ProductsTableQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductsTableQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"hazardous"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"containers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"warehouse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"current_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductsTableQueryQuery, ProductsTableQueryQueryVariables>;
export const AddStockToWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddStockToWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStockToWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"product_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"Argument","name":{"kind":"Name","value":"warehouse_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationAddStockToWarehouseSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddStockToWarehouseMutation, AddStockToWarehouseMutationVariables>;
export const CreateWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capacity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hazardous"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"capacity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capacity"}}},{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"hazardous"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hazardous"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateWarehouseMutation, CreateWarehouseMutationVariables>;
export const DeleteWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteWarehouseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteWarehouseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>;
export const RemoveStockFromWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveStockFromWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeStockFromWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"container_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"containerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"warehouse_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationRemoveStockFromWarehouseSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RemoveStockFromWarehouseMutation, RemoveStockFromWarehouseMutationVariables>;
export const WarehouseInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WarehouseInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"current_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"hazardous"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"movement_logs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"movement_type"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"warehouse_current_capacity"}}]}}]}}]}}]} as unknown as DocumentNode<WarehouseInfoQuery, WarehouseInfoQueryVariables>;
export const WarehousesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Warehouses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"current_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"hazardous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<WarehousesQuery, WarehousesQueryVariables>;
export const WarehousesTableDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WarehousesTableData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"current_capacity"}},{"kind":"Field","name":{"kind":"Name","value":"hazardous"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"containers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hazardous"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WarehousesTableDataQuery, WarehousesTableDataQueryVariables>;