import { Dispatch, useState } from "react";

import { colors, file, close } from "../assets/icons";
import { Button, ColorPicker, FilePicker } from "../components";
import { Irgb } from "../types";

const Tab2 = ({
  changeColor,
  color,
  setFile,
  img,
  setLogo,
}: {
  changeColor: (rgb: Irgb) => void;
  color: Irgb;
  setFile: Dispatch<File | null>;
  img: string | null;
  setLogo: Dispatch<string>;
}) => {
  const [tab, setTab] = useState(0);
  const [enLogo, setEnLogo] = useState(false);

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
        <Button
          img={file}
          active={tab === 2 ? true : false}
          color={color}
          ind={2}
          changeTab={changeTab}
        />
      </div>
      {tab != 0 && (
        <section className="w-[220px] h-[330px] absolute bg-[#111] rounded md:top-[50%] top-[65%] left-[90px] translate-y-[-50%] ">
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
          {tab === 2 && (
            <FilePicker
              img={img}
              setLogo={setLogo}
              setFile={setFile}
              color={color}
              enLogo={enLogo}
              setEnLogo={setEnLogo}
            />
          )}
        </section>
      )}
    </>
  );
};

export default Tab2;
