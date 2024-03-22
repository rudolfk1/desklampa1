import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { SceneContainer } from "./components/Scene";
import { LampProvider } from "./context/LampContext";
import LampColorPicker from "./components/LampColorPicker";
import LightToggle from "./components/LightToggle";
import AddToggle from "./components/AddToggle";
import Cart from "./components/Cart";
import { motion } from "framer-motion";
import { CartProvider } from "./context/CartContext";

function App() {
  const [ambientIntensity, setAmbientIntensity] = useState(3);
  const [boxColor, setBoxColor] = useState("white");
  const [effectsEnabled, setEffectsEnabled] = useState(false);
  const [environmentVisible, setEnvironmentVisible] = useState(true);
  const [movingSpotVisible, setMovingSpotVisible] = useState(false);
  const [isLightOn, setIsLightOn] = useState(true); 
  const [divColor, setDivColor] = useState("bg-zinc-300/90"); 
  const [textColor, setTextColor] = useState("text-zinc-800");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cameraProps = isMobile
    ? { fov: 16, position: [-3, -1, -10] as [number, number, number] }
    : { fov: 10, position: [-3, -1, -10] as [number, number, number] };

  const orbitControlsProps = isMobile
    ? { target: [0.475, 0.71, 0] as [number, number, number], maxDistance: 100 }
    : { target: [1, 0.17, 0] as [number, number, number], maxDistance: 100 };

  const toggleFeatures = () => {
    setAmbientIntensity(ambientIntensity === 0.1 ? 3 : 0.1);
    setBoxColor(boxColor === "#5b5b5b" ? "white" : "#5b5b5b");
    setEffectsEnabled(!effectsEnabled);
    setEnvironmentVisible(!environmentVisible);
    setMovingSpotVisible(!movingSpotVisible);
    setIsLightOn(!isLightOn);
    setDivColor(divColor === "bg-zinc-800/90" ? "bg-zinc-300/90" : "bg-zinc-800/90");
    setTextColor(textColor === "text-zinc-300" ? "text-zinc-800" : "text-zinc-300");
  };

  
  return (
    <LampProvider>
      <CartProvider>
      <div className="h-screen w-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#eaeaea] z-[-2]"></div>
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[-1]"
          initial={{ opacity: 0.5, x: 500 }} // Starting slightly transparent and off-screen
          animate={{ opacity: 1, x: 0 }} // Animating to fully visible and centered
          transition={{ duration: 3 }}
        >
          <Canvas>
              <PerspectiveCamera makeDefault {...cameraProps} />
              <OrbitControls {...orbitControlsProps} />
            <SceneContainer
              ambientIntensity={ambientIntensity}
              boxColor={boxColor}
              effectsEnabled={effectsEnabled}
              environmentVisible={environmentVisible}
              movingSpotVisible={movingSpotVisible}
            />
          </Canvas>
        </motion.div>
        <div className="absolute top-0 left-0 w-full z-10 flex flex-row pl-6 pt-6">
          <motion.div
            className={`p-4 z-10 ${divColor} shadow-xl rounded-lg grid gap-2 hover:scale-105 backdrop-blur-sm`}
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            style={{ gridTemplateRows: "auto auto 1fr" }}
          >
            <LampColorPicker />
            <div>
              <p className={`${textColor} text-[1.3rem] font-bold`}>Desk Lamp A1</p>
              <p className={`${textColor} text-[0.8rem]`}>
                - High-grade steel
              </p>
              <p className={`${textColor} text-[0.8rem]`}>
                - H 50cm x W 15cm x D 15cm
              </p>
              <p className={`${textColor} text-[0.8rem]`}>
                - Adjustable arm and head
              </p>
              <p className={`${textColor} text-[0.8rem]`}>
                - Energy-efficient LED
              </p>
            </div>

            <div className="flex justify-end gap-2 ">
              <LightToggle isLightOn={isLightOn} toggleFeatures={toggleFeatures} />
              <AddToggle textColor={textColor} />

            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-20 sm:-bottom-20 left-5 sm:left-10 z-10">
          <motion.div
            className="p-2"
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <motion.p
              className={`${textColor} text-[6rem] sm:text-[18rem] text-opacity-5 font-bold flex items-start`}
            >
              <span className="text-[2rem] sm:text-[6rem] relative top-[1.7rem] sm:top-[4.9rem]">$</span>99
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-0 right-0 z-20 p-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 3}}
        >
          <Cart divColor={divColor} textColor={textColor}/>
        </motion.div>
      </div>
      </CartProvider>
    </LampProvider>
  );
}

export default App;


