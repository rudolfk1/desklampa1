import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { RxCross1 } from 'react-icons/rx';
import { GrAdd, GrSubtract } from 'react-icons/gr';

import { BsCart3 } from 'react-icons/bs';

interface CartProps {
  divColor: string;
  textColor: string;
}

function Cart({ divColor, textColor }: CartProps) {
  const { items, increaseQuantity , decreaseQuantity} = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const itemPrice = 99; // Assuming a fixed price for simplicity
    return items.reduce((total, item) => total + (item.quantity * itemPrice), 0);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0); // Calculate total item count

  return (
    <div className={`${textColor} ${divColor} relative flex text-xl z-20 rounded-lg cursor-pointer ${isCartOpen ? "w-[20rem] h-[24rem] items-start justify-end" : "w-11 h-11 items-center justify-center"} shadow-xl backdrop-blur-sm`}>
      <div onClick={toggleCart} className="absolute hover:scale-105 active:scale-80 transition-all duration-200 right-2 top-2">
        {isCartOpen ? <RxCross1 className="text-2xl" /> : <BsCart3 className=" mr-[0.15rem] text-2xl" />}
      </div>
      {itemCount > 0 && (
        <motion.span
          className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white flex justify-center items-center rounded-full text-xs"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        >
          {itemCount}
        </motion.span>
      )}
      {isCartOpen && (
        <motion.div
          className="flex flex-col h-full justify-between text-left w-full p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {items.length > 0 ? (
            <>
              <h2 className="text-lg font-semibold mb-4">Your Cart</h2> {/* Added "Your Cart" header */}
              {items.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border-2 border-zinc-200/50" style={{ backgroundColor: item.color }}></div>
                    <span className='text-base'>Desk Lamp A1</span>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <button className={`${textColor} bg-black/20 p-1 rounded-lg `}onClick={() => decreaseQuantity(item.color)}><GrSubtract /></button>
                    <span >{item.quantity}</span>
                    <button className={`${textColor} bg-black/20 p-1 rounded-lg `}onClick={() => increaseQuantity(item.color)}><GrAdd /></button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <span className="font-semibold">Your cart is empty</span>
          )}
          <div className="mt-auto">
            <div className="border-t pt-4">
              <span className="font-semibold">Total: ${calculateTotalPrice()}</span>
              <button 
                className={`bg-black/20   rounded-md p-4 w-full hover:bg-black/40 active:scale-95 ${textColor}`}
                onClick={() => {/* handle checkout logic */}}
              >
                Checkout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
