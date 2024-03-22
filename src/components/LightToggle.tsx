import { MdOutlinePowerOff, MdOutlinePower } from "react-icons/md";

interface LightToggleProps {
  isLightOn: boolean;
  toggleFeatures: () => void;
}

function LightToggle({ isLightOn, toggleFeatures }: LightToggleProps) {
  // Combine common classes for icons with dynamic color class
  const iconClasses = `w-6 h-6 ${
    isLightOn ? 'text-zinc-800' : 'text-zinc-300'
  }`;

  return (
    <button
        onClick={toggleFeatures}
        className="w-10 h-10 rounded-full border-[2.5px] shadow-xl border-zinc-200/40 hover:border-stone-500 focus:border-4 focus:border-zinc-700 focus:outline-none flex justify-center items-center"
    >
        {isLightOn ? (
        <MdOutlinePower className={iconClasses} />
        ) : (
        <MdOutlinePowerOff className={iconClasses} />
        )}
    </button>
  );
};

export default LightToggle;
