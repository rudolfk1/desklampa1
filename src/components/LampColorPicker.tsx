
import { useCart } from '../context/CartContext';
import { useLamp } from '../context/LampContext';

function LampColorPicker (){
  const { setPreselectedColor } = useCart();
  const { changeColor } = useLamp();
  const colors: string[] = ['#FF0000', '#000000', '#9fc5e8', '#cd6432', '#999999'];

  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          className="w-10 h-10 rounded-full border-[2.5px] shadow-xl border-zinc-200/50 hover:border-stone-400 focus:border-gray-800 focus:border-4"
          onClick={() => {setPreselectedColor(color), changeColor(color)}}
        />
      ))}
    </div>
  );
};

export default LampColorPicker;
