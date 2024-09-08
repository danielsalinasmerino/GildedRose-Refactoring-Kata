import { MAX_QUALITY_NORMAL_ITEMS } from "./../constants/constants";
import { Item } from "./../gilded-rose";

// TODO
export const updateBackstageItem = (item: Item) => {
  if (item.quality < MAX_QUALITY_NORMAL_ITEMS) {
    item.quality = item.quality + 1;
  }

  if (item.sellIn < 11) {
    if (item.quality < MAX_QUALITY_NORMAL_ITEMS) {
      item.quality = item.quality + 1;
    }
  }

  if (item.sellIn < 6) {
    if (item.quality < MAX_QUALITY_NORMAL_ITEMS) {
      item.quality = item.quality + 1;
    }
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    item.quality = 0;
  }

  return item;
};
