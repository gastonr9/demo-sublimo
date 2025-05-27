import f1 from "../assets/images/1-100.jpg";
import f2 from "../assets/images/2-100.jpg";
import f3 from "../assets/images/3-100.jpg";
import f4 from "../assets/images/4-100.jpg";
import f5 from "../assets/images/5-100.jpg";
const Slide = () => {
  return (
    <div className="w-5/6 place-self-center flex flex-col items-center justify-center">
      <img src={f1} alt="" />
      <img src={f2} alt="" />
      <img src={f3} alt="" />
      <img src={f4} alt="" />
      <img src={f5} alt="" />
    </div>
  );
};

export default Slide;
