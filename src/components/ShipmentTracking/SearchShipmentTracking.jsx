import React, { useState, useEffect } from "react";
import { Timeline } from "primereact/timeline";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { getOrderById } from "../../utils/querys";
import { ProgressSpinner } from "primereact/progressspinner";

export default function SearchShipmentTracking() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputInvalidMsg, setInputInvalidMsg] = useState(null);

  const search = () => {
    if (!inputValue) {
      setInputInvalidMsg("Ingrese ID de pedido");
    } else {
      setLoading(true);

      getOrderById(inputValue)
        .then((res) => {
          if (res.data()) {
            setHistory(res.data().status);
          } else {
            setError("Pedido no encontrado");
          }
        })
        .catch((err) => {
          setError("Ocurrio un problema");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const reset = () => {
    setInputValue(null);
    setHistory([]);
    setError(null);
    setInputInvalidMsg(null);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12">
          {loading && (
            <div className="col-12 text-center">
              <ProgressSpinner />
            </div>
          )}

          {!error && !loading && history.length == 0 && (
            <div className="col-12">
              <p>
                *Puede ingresar este id <strong>WLElmZKbvJDXuEP1HfJG</strong>,
                para visualizar un ejemplo.
              </p>
              <div className="p-inputgroup">
                <InputText
                  className={inputInvalidMsg && "p-invalid"}
                  placeholder="Ingrese ID de pedido"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <Button
                  icon="pi pi-search"
                  className="p-button-info"
                  onClick={search}
                />
              </div>
              {inputInvalidMsg && (
                <small className="p-error block mt-2">{inputInvalidMsg}</small>
              )}
            </div>
          )}

          {history.length > 0 && (
            <>
              <div className="col-12 text-xl mt-5 text-center">
                ID pedido: <strong>{inputValue}</strong>
              </div>
              <div className="col-12 mt-5">
                <Timeline
                  value={history}
                  opposite={(item) => item.detail}
                  content={(item) => (
                    <small className="p-text-secondary">
                      {new Date(item.date.seconds * 1000).toLocaleString()}
                    </small>
                  )}
                />
              </div>
              <div className="col-12 text-xl mt-5 text-center">
                <Button
                  label="Buscar otro"
                  className="p-button-info"
                  onClick={reset}
                />
              </div>
            </>
          )}

          {error && (
            <>
              <div className="col-12 text-xl mt-5 text-center">{error}</div>
              <div className="col-12 text-xl mt-5 text-center">
                <Button
                  label="Buscar otro"
                  className="p-button-info"
                  onClick={reset}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
