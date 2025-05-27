import PropTypes from "prop-types";

interface Props {
  dark: boolean;
}

export const BlurBg = ({ dark }: Props): JSX.Element => {
  return (
    <div
      className={`w-[2212px] blur-[100px] rotate-[-180.00deg] h-[1080px] relative ${
        !dark ? "opacity-80" : ""
      }`}
    >
      <div
        className={`w-[2129px] left-[42px] relative ${
          dark ? "top-[-148px]" : "top-5"
        } ${dark ? "h-[1408px]" : "h-[1039px]"} ${
          !dark ? "rounded-[1064.33px/519.66px]" : ""
        }`}
      >
        <div
          className={`absolute ${dark ? "w-[907px]" : "w-[1375px]"} ${
            dark ? "left-[642px]" : "left-[377px]"
          } ${dark ? "top-[100px]" : "top-[230px]"} ${
            dark ? "blur-[11.45px]" : ""
          } ${dark ? "rotate-[-58.21deg]" : ""} ${
            dark ? "h-[1209px]" : "h-[579px]"
          }`}
        >
          <div
            className={`relative ${dark ? "w-[982px]" : ""} ${
              dark ? "left-[-37px]" : ""
            } ${dark ? "top-[9px]" : ""} ${dark ? "h-[1190px]" : "h-[579px]"}`}
          >
            <div
              className={`bg-[#2388ff] absolute ${
                dark ? "w-[555px]" : "w-[816px]"
              } ${dark ? "left-[47px]" : "left-0"} ${
                dark ? "top-[35px]" : "top-0"
              } ${dark ? "rotate-[7.86deg]" : ""} ${
                dark ? "h-[731px]" : "h-[399px]"
              } ${
                dark
                  ? "rounded-[277.72px/365.37px]"
                  : "rounded-[408.19px/199.3px]"
              }`}
            />

            <div
              className={`absolute ${dark ? "w-[555px]" : "w-[816px]"} ${
                dark ? "left-[380px]" : "left-[559px]"
              } ${dark ? "top-[35px]" : "top-0"} ${
                dark ? "rotate-[7.86deg]" : ""
              } ${dark ? "h-[731px]" : "h-[399px]"} ${
                dark
                  ? "rounded-[277.72px/365.37px]"
                  : "rounded-[408.19px/199.3px]"
              } ${dark ? "bg-[#2388ff]" : "bg-[#005ae3]"}`}
            />

            <div
              className={`bg-[#2388ff] absolute ${
                dark ? "w-[555px]" : "w-[816px]"
              } ${dark ? "left-52" : "left-[270px]"} ${
                dark ? "top-[425px]" : "top-[180px]"
              } ${dark ? "rotate-[7.86deg]" : ""} ${
                dark ? "h-[731px]" : "h-[399px]"
              } ${
                dark
                  ? "rounded-[277.72px/365.37px]"
                  : "rounded-[408.19px/199.3px]"
              }`}
            />
          </div>
        </div>

        <div
          className={`w-[2129px] left-0 h-[1039px] rounded-[1064.33px/519.66px] absolute ${
            dark ? "opacity-[0.92]" : ""
          } ${dark ? "top-[168px]" : "top-0"} ${
            dark
              ? "[-webkit-backdrop-filter:blur(171.55px)_brightness(100%)]"
              : "[-webkit-backdrop-filter:blur(231.47px)_brightness(100%)]"
          } ${dark ? "bg-[#18203ccc]" : "bg-[#ffffffa6]"} ${
            dark
              ? "backdrop-blur-[171.55px] backdrop-brightness-[100%]"
              : "backdrop-blur-[231.47px] backdrop-brightness-[100%]"
          }`}
        />
      </div>
    </div>
  );
};

BlurBg.propTypes = {
  dark: PropTypes.bool,
};
