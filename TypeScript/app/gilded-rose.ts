import {
  AGED_BRIE_ITEM,
  BACKSTAGE_PASSES_ITEM,
  CONJURED_MANA_CAKE_ITEM,
  SULFURAS_ITEM,
} from "./constants/constants";
import { updateAgedItem } from "./item-updaters/update-aged-item";
import { updateBackstageItem } from "./item-updaters/update-backstage-item";
import { updateConjuredItem } from "./item-updaters/update-conjured-item";
import { updateGeneralItem } from "./item-updaters/update-general-item";
import { updateLegendaryItem } from "./item-updaters/update-legendary-item";
import { itemIs } from "./utils/item-is";

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
    this.items = this.items.map((item) => {
      const itemIsAged = itemIs(item, AGED_BRIE_ITEM);
      const itemIsBackstage = itemIs(item, BACKSTAGE_PASSES_ITEM);
      const itemIsConjured = itemIs(item, CONJURED_MANA_CAKE_ITEM);
      const itemIsLegendary = itemIs(item, SULFURAS_ITEM);

      if (itemIsAged) return updateAgedItem(item);
      if (itemIsBackstage) return updateBackstageItem(item);
      if (itemIsConjured) return updateConjuredItem(item);
      if (itemIsLegendary) return updateLegendaryItem(item);

      return updateGeneralItem(item);
    });

    return this.items;
  }
}
