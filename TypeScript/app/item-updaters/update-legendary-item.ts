import { Item } from "./../gilded-rose";

// TODO
export const updateLegendaryItem = (item: Item) => {
  item.sellIn = item.sellIn - 1;

  return item;
};
