export interface Van {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
  hostId: string;
}

export type ContextType = { van: Van | null };
