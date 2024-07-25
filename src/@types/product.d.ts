export type IProduct = {
    id?: string | number,
    name: string;
    category: string;
    price: string;
    stock: string;
    description: string;
    onRemove?: () => void;
    onEdit?: LinkProps;
  };