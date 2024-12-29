import { useReducer } from 'react'
import { CarritoContexto } from './CarritoContexto'

let initialState = []

export const Carrito = ({ children }) => {

    console.log("ejecutando el carrito");

    const reducer = (state=initialState, action={}) => {

        switch (action.type){

            case "AGREGAR":
                return [...state, action.payload]
            case 'ELIMINAR':
                return state.filter(libro_item => libro_item.id !== action.payload)
            case 'AUMENTAR':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if(item.id === action.payload) return {...item, cantidad: cant}
                    return item
                })
            case 'DISMINUIR':
                return state.map(item => {
                    const cant = item.cantidad -1
                    if(item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                    return item
                })
            default:
                return state
        }

    }

    const [listaCompras, dispatch] = useReducer(reducer, initialState)

    const agregarLibro = (libro_item) => {
        libro_item.cantidad = 1
        const action = {
            type: "AGREGAR",
            payload: libro_item

        }
        console.log("action ejecutada nixon");
        dispatch(action)
    }

    const eliminarLibro = (id) => {
        const action = {
            type: 'ELIMINAR',
            payload: id
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: 'AUMENTAR',
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: 'DISMINUIR',
            payload: id
        }
        dispatch(action)
    }

    const vaciarCarrito = () => {
        let initialState = [];
    }

return (

    <CarritoContexto.Provider value={{listaCompras, agregarLibro, eliminarLibro, vaciarCarrito, aumentarCantidad, disminuirCantidad }}>
        { children }
    </CarritoContexto.Provider>
)
}
