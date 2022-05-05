export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="greek-pattern"></div>
        <div className="footerContent">
          <div className="row">
            <div className="firstDiv w-full">
              <div className="col-12 text-center">
                <p className="text-5xl cinzelFont">Audentis Fortuna Iuvat</p>
                <p className="text-2xl cinzelFont">" La fortuna favorece a los audaces "</p>
              </div>
              <div className="col-12 text-center mb-5">
                <a
                  className="no-underline mr-5"
                  target="_blank"
                  href="https://www.instagram.com/olimpia_accesorios__/"
                >
                  <span className="text-2xl ">
                    <i
                      className="pi pi-instagram"
                      style={{ fontSize: "2em", color: "black" }}
                    ></i>
                  </span>
                </a>

                <a
                  className="no-underline"
                  target="_blank"
                  href="https://wa.me/+5493"
                >
                  <span className="text-2xl ">
                    <i
                      className="pi pi-whatsapp"
                      style={{ fontSize: "2em", color: "black" }}
                    ></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-12 secondDiv text-center">
              <p>
                Diseñada y creada por <strong>Gabriel Zegray</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
