import logo from "../assets/images/logo2.svg";
import luz from "../assets/images/luz.svg";

export const Page = (): JSX.Element => {
  return (
    <main className="l-main">
      <section className="home" id="home">
        <div className="home-container bd-grid">
          <div className="home-sneaker">
            <div className="home-shape"></div>
            <img
              src="https://i.postimg.cc/N0kPY9TT/imghome.png"
              alt=""
              className="home-img"
            />
          </div>

          <div className="home-data">
            <h1 className="home-title">Sublimó</h1>
            <p className="home-description">
              Generador de mockups 3D para productos personalizados
            </p>
            <a>
               Presentación etapa 1 y 2 – Práctica Profesionalizante II Alumno:
              Gastón Rodríguez
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
