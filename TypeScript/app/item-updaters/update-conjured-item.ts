import { Item } from "./../gilded-rose";

export const updateConjuredItem = (item: Item) => {
  item.sellIn = item.sellIn - 1;

  const qualityDecrease = item.sellIn < 0 ? 4 : 2;

  item.quality = item.quality - qualityDecrease;

  return item;
};
