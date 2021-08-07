import React from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { Link, useHistory } from 'react-router-dom'
import { createProdAction } from '../../store/products/actions'
const { v4: uuidv4 } = require('uuid')


const ProductCreate = () => {
    const [name, handlerName] = useInput('')
    const [precio, handlerPrecio] = useInput('')
    const [descripcion, handlerDescripcion] = useInput('')
    const [color, handlerColor] = useInput('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handlerSave = (event: any) => {
        event.preventDefault()
        dispatch(createProdAction({
           // id: new Date().getTime(),
           id: uuidv4(),
            name,
            precio,
            descripcion,
            color
        }))
        history.push('/products')
    }
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Nuevo Producto
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products">Listado</Link>
                        </div>
                    </div>
                    <form onSubmit={handlerSave}>
                        <div className="card-body">
                            <label>Nombre</label>
                            <input className="form-control" type="text" value={name} onChange={handlerName} />
                            <label>Precio</label>
                            <input className="form-control" type="number" value={precio} onChange={handlerPrecio} />
                            <label>Descripcion</label>
                            <input className="form-control" type="text" value={descripcion} onChange={handlerDescripcion} />
                            <label>Color</label>
                            <input className="form-control" type="text" value={color} onChange={handlerColor} />
                            
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-primary mt-3"
                                disabled={name === '' || precio === ''}
                            >Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate
