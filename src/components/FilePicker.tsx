import { Dispatch, useEffect } from "react";

import { Irgb } from "../types";

const FilePicker = ({
  img,
  setLogo,
  setFile,
  color,
  enLogo,
  setEnLogo,
}: {
  img: string | null;
  setLogo: Dispatch<string>;
  setFile: Dispatch<File>;
  color: Irgb;
  enLogo: boolean;
  setEnLogo: Dispatch<boolean>;
}) => {
  const handleClick = (ind: number) => {
    if (img) {
      switch (ind) {
        case 1:
          if (!enLogo) setLogo(img);
          else setLogo("./logo.png");
          setEnLogo(!enLogo);
          break;
      }
    }
  };
  const reset = () => {
    setEnLogo(false);
  };
  useEffect(() => {
    if (img) {
      handleClick(1);
    }
  }, [img]);

  return (
    <section className="flex flex-col items-center">
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className=" w-[90%] text-[13px] file:hover:bg-gray-700 file:bg-[#111] file:border-white file:border-solid file:p-1 file:px-2 file:text-white file:rounded-full file:mr-2"
        style={{
          color: `rgb(74, 74, 74)`,
        }}
        onChange={(e) => {
          reset();
          setFile(e.target.files![0]);
        }}
      />
      <div className="flex justify-center overflow-hidden h-[210px] w-full mt-2 mb-2 select-none">
        {img && (
          <img
            width={"150px"}
            src={img}
            className="text-white"
            draggable={false}
          />
        )}
      </div>
      <div></div>
    </section>
  );
};

export default FilePicker;
