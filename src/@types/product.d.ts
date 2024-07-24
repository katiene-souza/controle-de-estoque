export type IProduct = {
    id?: number,
    name: string;
    category: string;
    price: string;
    stock: string;
    description: string;
    onRemove?: () => void;
    onEdit?: () => void;
  };