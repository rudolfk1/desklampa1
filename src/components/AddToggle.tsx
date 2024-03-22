
import { GrAdd } from 'react-icons/gr';
import { MdOutlineDone } from 'react-icons/md';
import { useCart } from '../context/CartContext';


interface AddToggleProps {
  textColor: string;
}

function AddToggle({ textColor }: AddToggleProps) {
  const { addItem,  preselectedColor, setPreselectedColor } = useCart();
  const isToggled = Boolean(preselectedColor);

  const toggleBasket = () => {
    if (isToggled) {
      if (preselectedColor) {
        addItem(preselectedColor);
        setPreselectedColor(null!); // Clear preselected color after adding
      }
    } 
  };

  return (
    <div className="right-0">
      <button
        className={`flex items-center ${textColor} justify-center w-10 h-10 rounded-full border-[2.5px] shadow-xl border-zinc-200/50 hover:border-stone-400 focus:border-gray-400 focus:border-4 text-3xl`}
        onClick={toggleBasket}
      >
        {isToggled ? <GrAdd /> : <MdOutlineDone /> }
      </button>
    </div>
  );
};

export default AddToggle;
