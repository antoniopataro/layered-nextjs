import {
  type GetItem,
  type RemoveItem,
  type SetItem
} from '@/core/protocols/kv';

export class CookiesStorage implements GetItem, RemoveItem, SetItem {
  getItem<I>(key: string): I | null {
    if (typeof document === 'undefined') {
      return null;
    }

    const cookies = document.cookie.split(/;\s*/);

    for (const cookie of cookies) {
      const [k, v] = cookie.split('=');

      if (k === key) {
        try {
          return JSON.parse(v);
        } catch (error) {
          return v as I;
        }
      }
    }

    return null;
  }

  removeItem(key: string): void {
    this.setItem(key, null);
  }

  setItem<I>(
    key: string,
    value: I,
    options?: {
      expires?: string;
      domain?: string;
      path?: string;
      secure?: boolean;
    }
  ): void {
    if (typeof document === 'undefined') {
      return undefined;
    }

    let s = `${key}=${JSON.stringify(value)}`;

    if (options) {
      if (options.expires) {
        s += `; expires=${options.expires}`;
      }

      if (options.path) {
        s += `; path=${options.path}`;
      }

      if (options.domain) {
        s += `; domain=${options.domain}`;
      }

      if (options.secure) {
        s += `; secure`;
      }
    }

    document.cookie = s;
  }
}
