export interface GetItem {
  getItem<I>(key: string): I | null;
}

export interface RemoveItem {
  removeItem(key: string): void;
}

export interface SetItem {
  setItem<I>(key: string, value: I): void;
}
