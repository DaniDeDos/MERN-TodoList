import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  VALIDAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: action.payload,
      };

    case AGREGAR_TAREA:
      return {
        ...state,
        tareasproyecto: [...state.tareasproyecto, action.payload],
        errortarea: false,
        tareaseleccionada: null,
      };

    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true,
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareasproyecto: state.tareasproyecto.filter(
          (tarea) => tarea._id !== tarea.payload
        ),
      };
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tareasproyecto: state.tareasproyecto.map((tarea) =>
          tarea._id === action.payload._id ? action.payload : tarea
        ),
        tareaseleccionada: null,
      };

    case TAREA_ACTUAL:
      return {
        ...state,
        tareaseleccionada: action.payload,
      };

    case LIMPIAR_TAREA:
      return {
        ...state,
        tareaseleccionada: null,
      };

    default:
      return state;
  }
};
