import logo from "../img/logo.svg";
import CartWidget from "./CartWidget";

export default function NavBar() {
  let isVisibleItems = false;
  const itemsMenu = [
    "Inicio",
    "Relojes",
    "Acero Blanco",
    "Acero Dorado",
    "Acero Quirúrgico",
  ];

  // Cuando se cambie el tamaño de pantalla se reestableceran los valores
  window.addEventListener("resize", function () {
    isVisibleItems = false;
    document.getElementById("divItemsMenu").classList.remove("showNav");
    document.getElementById("hamburgerButton").classList.remove("is-active");
  });

  // Funcion para mostrar el menu cuando tenemos vista de celular - tablet
  const displayItems = () => {
    isVisibleItems = isVisibleItems ? false : true;
    if (isVisibleItems) {
      document.getElementById("divItemsMenu").classList.add("showNav");
      document.getElementById("hamburgerButton").classList.remove("is-active");
      document.getElementById("hamburgerButton").classList.add("is-active");
    } else {
      document.getElementById("divItemsMenu").classList.remove("showNav");
      document.getElementById("hamburgerButton").classList.add("is-active");
      document.getElementById("hamburgerButton").classList.remove("is-active");
    }
  };

  return (
    <>
      <header className="header">
        <div className="firstDiv">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="hamburguerDiv">
            <button
              id="hamburgerButton"
              onClick={() => displayItems()}
              className="hamburger hamburger--collapse"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        <div className="secondDiv">
          <CartWidget/>
        </div>

        <nav className="divItemsMenu" id="divItemsMenu">
          <ul>
            {itemsMenu.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
