import { Item } from "./../gilded-rose";

// TODO
export const updateGeneralItem = (item: Item) => {
  item.quality = item.quality - 1;

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    item.quality = item.quality - 1;
  }

  return item;
};
