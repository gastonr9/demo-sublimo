import { logo, save } from "../assets/icons";
import { Button2 } from "../components";
import { canvasDownloader } from "../helper";
import { Irgb } from "../types";

const Tab1 = ({
  color,
  handleLogo,
  isLogo,
}: {
  color: Irgb;
  handleLogo: () => void;
  isLogo: boolean;
}) => {
  const handleClick = (ind: number) => {
    switch (ind) {
      case 1:
        handleLogo();
        break;

      case 3:
        canvasDownloader();
        break;
    }
  };

  return (
    <div
      style={{
        borderColor: `rgb(74, 74, 74)`,
      }}
      className="relative gap-1 py-5 md:py-8 select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center z-1 top-[68%]  md:w-[70px] w-[60px]  "
    >
      <Button2
        img={logo}
        active={isLogo}
        color={color}
        ind={1}
        handleClick={handleClick}
      />

      <Button2
        img={save}
        active={false}
        color={color}
        ind={3}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Tab1;
