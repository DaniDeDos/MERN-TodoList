import React, { useReducer } from "react";

import alertaContext from "./alertaContext";
import alertaReducer from "./alertaReducer";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

const AlertaState = ({ children }) => {
  const initialState = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(alertaReducer, initialState);

  // Funciones
  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 5000);
  };

  return (
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta,
      }}
    >
      {children}
    </alertaContext.Provider>
  );
};

export default AlertaState;
