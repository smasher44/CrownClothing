import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers:2,
  jackets:3,
  womens:4,
  mens:5,
  kids:6,
  sandals:7,
  elders:8,
}

const selectShop = state => state.shop; 
/* the "shop" here is reference in the shop:shopReducer in the root reducer 
which means that this is the property that will reference to the recieve state*/

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],  
    collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);









