
import { MdOutlinePowerOff, MdOutlinePower } from "react-icons/md";


interface LightToggleProps {
  isLightOn: boolean;
  toggleFeatures: () => void;
}

function LightToggle({ isLightOn, toggleFeatures }: LightToggleProps) {
  // Determine icon color based on isLightOn
  const iconColor = isLightOn ? "black" : "white";

  return (
    <button
        onClick={toggleFeatures}
        className="w-10 h-10 rounded-full border-[2.5px] shadow-xl border-zinc-200/40 hover:border-stone-500 focus:border-4 focus:border-gray-400 focus:outline-none flex justify-center items-center"
    >
        {isLightOn ? (
        <MdOutlinePower size={24} style={{ color: iconColor }} />
        ) : (
        <MdOutlinePowerOff size={24} style={{ color: iconColor }} />
        )}
    </button>
  );
};

export default LightToggle;
