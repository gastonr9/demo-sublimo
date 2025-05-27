<<<<<<< HEAD
import Index from "./pages/index";
const App = () => {
  return (
    <div className="fondo">
      <Index></Index>;
    </div>
  );
};
=======
import Home from "./pages/Home";
import Slide from "./pages/Slide";

const App = () => {
  return (
    <>
      <main className="backg">
        <Slide />
        <Home />
      </main>
    </>
  );
};

>>>>>>> master
export default App;
