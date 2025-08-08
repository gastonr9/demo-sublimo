import {  useState } from "react";
import { colors, close } from "../assets/icons";
import { Button, ColorPicker} from "../components";
import { Irgb } from "../types";

const Tab2 = ({
  changeColor,
  color,
}: {
  changeColor: (rgb: Irgb) => void;
  color: Irgb;
}) => {
  const [tab, setTab] = useState(0);

  const changeTab = (ind: number) => {
    if (tab === ind) setTab(0);
    else setTab(ind);
  };
  return (
    <>
      <div
        style={{
          borderColor: `rgb(74, 74, 74)`,
        }}
        className="relative gap-1 py-5 md:py-8 select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center z-1 top-[68%]  md:w-[70px] w-[60px]  "
      >
        <Button
          img={colors}
          active={tab === 1 ? true : false}
          color={color}
          ind={1}
          changeTab={changeTab}
        />
      <button>Subir Diseño</button>

      </div>
      {tab != 0 && (
        <section className="w-[220px] h-[330px] absolute bg-[#aaaaaa] rounded md:top-[50%] top-[65%] left-[90px] translate-y-[-50%] ">
          <div className="flex justify-end">
            <button
              type="button"
              className="w-[30px] h-[30px] p-[6px]"
              onClick={() => changeTab(0)}
            >
              <img src={close} alt="close" className="select-none" />
            </button>

          </div>

          {tab === 1 && <ColorPicker color={color} changeColor={changeColor} />}
          
        </section>
      )}
    </>
  );
};

export default Tab2;
