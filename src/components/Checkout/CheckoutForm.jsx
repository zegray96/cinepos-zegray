import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { sendOrder } from "../../utils/querys";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CheckoutForm({ articlesCart, totalCart }) {
  const {clear} = useContext(CartContext);
  const [surnameNameValue, setSurnameNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  /** Validate form */
  const [surnameNameInvalidMsg, setSurnameNameInvalidMsg] = useState(null);
  const [phoneInvalidMsg, setPhoneInvalidMsg] = useState(null);
  const [emailInvalidMsg, setEmailInvalidMsg] = useState(null);
  /** End validate form */
  const [orderId, setOrderId] = useState(null);

  const clearValidateForm = () => {
    setSurnameNameInvalidMsg(null);
    setPhoneInvalidMsg(null);
    setEmailInvalidMsg(null);
  };

  const validateForm = () => {
    clearValidateForm();

    let validate = true;

    if (!surnameNameValue) {
      setSurnameNameInvalidMsg("Ingrese apellido y nombre");
      validate = false;
    }

    if (!phoneValue) {
      setPhoneInvalidMsg("Ingrese celular");
      validate = false;
    }

    if (!emailValue) {
      setEmailInvalidMsg("Ingrese email");
      validate = false;
    }
    return validate;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const order = {
        date: new Date(),
        buyer: {
          surname_name: surnameNameValue,
          phone: phoneValue,
          email: emailValue,
        },
        articles: articlesCart,
        total: totalCart,
      };

      sendOrder(order)
        .then((res) => {
          setOrderId(res.id);
          // Limpiamos carrito y evitamos que no muestre el msj
          clear(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      {orderId ? (
        <div className="col-12"> 
          <p className="text-2xl m-0">Pedido generado exitosamente!</p>
          <p>Su N° de pedido es: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <>
          <div className="col-12 md:col-8">
            <div className="card p-4">
              <p className="text-2xl m-0">Datos de contacto</p>

              <form className="p-fluid mt-3" onSubmit={onSubmitForm}>
                <div className="field mt-5">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-user"></i>
                    <InputText
                      className={surnameNameInvalidMsg && "p-invalid"}
                      value={surnameNameValue}
                      onChange={(e) => setSurnameNameValue(e.target.value)}
                    />
                    <label className={surnameNameInvalidMsg && "p-error"}>
                      Apellido y Nombre
                    </label>
                  </span>

                  {surnameNameInvalidMsg && (
                    <small className="p-error block">
                      {surnameNameInvalidMsg}
                    </small>
                  )}
                </div>
                <div className="field mt-5">
                  <span className="p-float-label p-input-icon-right ">
                    <i className="pi pi-phone" />
                    <InputText
                      keyfilter="int"
                      className={phoneInvalidMsg && "p-invalid"}
                      value={phoneValue}
                      onChange={(e) => setPhoneValue(e.target.value)}
                    />
                    <label>Celular</label>
                  </span>
                  {phoneInvalidMsg && (
                    <small className="p-error block">{phoneInvalidMsg}</small>
                  )}
                </div>
                <div className="field mt-5">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-at"></i>
                    <InputText
                      className={emailInvalidMsg && "p-invalid"}
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <label>Email</label>
                  </span>
                  {emailInvalidMsg && (
                    <small className="p-error block">{emailInvalidMsg}</small>
                  )}
                </div>
                <Button type="submit" label="Enviar pedido" className="mt-2" />
              </form>
            </div>
          </div>

          <div className="col-12 md:col-4">
            <div className="card p-4">
              <p className="text-2xl m-0">Mi pedido</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                nobis voluptas eum quae modi labore praesentium provident nam
                consequatur sit, dignissimos, officiis aut dolorem quisquam
                autem facilis. Ad, nobis est.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
