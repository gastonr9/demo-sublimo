import { Button3 } from "../components";
import { Irgb } from "../types";

const Tab3 = ({
  color,
  logoS,
  logoP,
  handleLogoP,
  handleLogoS,
}: {
  color: Irgb;
  logoS: number;
  logoP: number;
  handleLogoP: (ind: number) => void;
  handleLogoS: (ind: number) => void;
}) => {
  const handleClick = (ind: number) => {
    switch (ind) {
      case 0:
      case 1:
      case 2:
        handleLogoP(ind);
        break;
      case 3:
        handleLogoS(0);
        break;
      case 4:
        handleLogoS(1);
        break;
      case 5:
        handleLogoS(2);
        break;
    }
  };
  return (
    <div
      style={{
        borderColor: `rgb(74, 74, 74)`,
      }}
      className="relative gap-1 py-5 md:py-8 select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center z-1 top-[68%] right-[15px] md:w-[70px] w-[60px]"
    >
      <h2
        style={{
          color: `rgb(74, 74, 74)`,
        }}
        className="md:text-[11px] text-[10px] font-bold md:mt-[-50px] md:mb-4 mt-[-40px] mb-[12px]"
      >
        LOGO
      </h2>
      <h2
        style={{
          color: `rgb(74, 74, 74)`,
        }}
        className="md:text-[11px] text-[10px] font-bold"
      >
        Posición
      </h2>
      <Button3
        active={logoP === 0 ? true : false}
        color={color}
        ind={0}
        text="I"
        handleClick={handleClick}
      />
      <Button3
        active={logoP === 1 ? true : false}
        color={color}
        ind={1}
        text="M"
        handleClick={handleClick}
      />
      <Button3
        active={logoP === 2 ? true : false}
        color={color}
        ind={2}
        text="D"
        handleClick={handleClick}
      />
      <h2
        style={{
          color: `rgb(74, 74, 74)`,
        }}
        className="md:text-[11px] text-[10px] font-bold mt-2"
      >
        Tamaño
      </h2>
      <Button3
        active={logoS === 0 ? true : false}
        color={color}
        ind={3}
        text="P"
        handleClick={handleClick}
      />
      <Button3
        active={logoS === 1 ? true : false}
        color={color}
        ind={4}
        text="M"
        handleClick={handleClick}
      />
      <Button3
        active={logoS === 2 ? true : false}
        color={color}
        ind={5}
        text="G"
        handleClick={handleClick}
      />
    </div>
  );
};

export default Tab3;
