import { MAX_QUALITY_NORMAL_ITEMS } from "./../constants/constants";
import { Item } from "./../gilded-rose";

// TODO
export const updateAgedItem = (item: Item) => {
  if (item.quality < MAX_QUALITY_NORMAL_ITEMS) {
    item.quality = item.quality + 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    if (item.quality < MAX_QUALITY_NORMAL_ITEMS) {
      item.quality = item.quality + 1;
    }
  }

  return item;
};
