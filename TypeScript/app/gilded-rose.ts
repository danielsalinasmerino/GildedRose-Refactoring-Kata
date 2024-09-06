import {
  AGED_BRIE_ITEM,
  BACKSTAGE_PASSES_ITEM,
  SULFURAS_ITEM,
} from "@/constants/items";
import { itemIs } from "@/utils/item-is";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      const itemIsAgedBrie = itemIs(item, AGED_BRIE_ITEM);
      const itemIsBackstagePasses = itemIs(item, BACKSTAGE_PASSES_ITEM);
      const itemIsSulfuras = itemIs(item, SULFURAS_ITEM);

      // TODO: First block
      if (item.name != AGED_BRIE_ITEM && item.name != BACKSTAGE_PASSES_ITEM) {
        if (item.quality > 0) {
          if (item.name != SULFURAS_ITEM) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == BACKSTAGE_PASSES_ITEM) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }

      // TODO: Second block
      if (!itemIsSulfuras) item.sellIn = item.sellIn - 1;

      // TODO: Third block
      if (item.sellIn < 0) {
        if (item.name != AGED_BRIE_ITEM) {
          if (item.name != BACKSTAGE_PASSES_ITEM) {
            if (item.quality > 0) {
              if (item.name != SULFURAS_ITEM) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
