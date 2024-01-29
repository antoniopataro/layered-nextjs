import {
  type GetItem,
  type RemoveItem,
  type SetItem
} from '@/core/protocols/kv';

export class LocalStorage implements GetItem, RemoveItem, SetItem {
  getItem<I>(key: string): I | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const item = localStorage.getItem(key);

    if (!item) {
      return null;
    }

    try {
      return JSON.parse(item);
    } catch (error) {
      return item as I;
    }
  }

  removeItem(key: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.removeItem(key);
  }

  setItem<I>(key: string, value: I): void {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }
}
