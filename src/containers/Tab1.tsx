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
    <section
      style={{
        borderColor: `rgb(74, 74, 74)`,
      }}
      className=" select-none border-[2px] bg-[#000]/50 rounded-full flex items-center justify-around z-1 bottom-[15px] left-[50%] translate-x-[-50%] md:w-[220px] md:h-[70px] w-[210px] h-[60px]"
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
    </section>
  );
};

export default Tab1;
