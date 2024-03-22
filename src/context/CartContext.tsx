import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  color: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (color: string) => void;
  removeItem: (color: string) => void;
  increaseQuantity: (color: string) => void;
  decreaseQuantity: (color: string) => void;
  clearItems: () => void;
  preselectedColor: string | null;
  setPreselectedColor: (color: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [preselectedColor, setPreselectedColor] = useState<string | null>('#000000');

  const addItem = (color: string) => {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.color === color);
      if (index === -1) {
        return [...prevItems, { color, quantity: 1 }];
      }
      return prevItems;
    });
  };

  const removeItem = (color: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.color !== color);
    });
  };

  const increaseQuantity = (color: string) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.color === color) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (color: string) => {
    setItems((prevItems) => {
      return prevItems.reduce((acc, item) => {
        if (item.color === color) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
          // If you want to remove item when quantity is 1, move this outside the condition
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[]);
    });
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, increaseQuantity, decreaseQuantity, clearItems, preselectedColor, setPreselectedColor
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};