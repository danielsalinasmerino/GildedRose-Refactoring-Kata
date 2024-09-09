import { Item } from "./../gilded-rose";

export const updateGeneralItem = (item: Item) => {
  item.sellIn = item.sellIn - 1;

  const qualityDecrease = item.sellIn < 0 ? 2 : 1;

  item.quality = item.quality - qualityDecrease;

  return item;
};
