import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../hooks/useInput'
import { Link, useHistory, useParams } from 'react-router-dom'
import { updateProdAction } from '../../store/products/actions'
import { productListSelector } from '../../store/products/selectors'

const ProductDetail = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id }: any = useParams()
    const productList = useSelector(productListSelector)

    const [name, handlerName, setName] = useInput('')
    const [precio, handlerPrecio, setPrecio] = useInput('')
    const [descripcion, handlerDescripcion, setDescripcion] = useInput('')
    const [color, handlerColor, setColor] = useInput('')

    useEffect(() => {
        const u = productList.find(e => e.id === Number.parseInt(id))
        if (u) {
            setName(u.name)
            setPrecio(u.precio)
            setDescripcion(u.descripcion)
            setColor(u.color)
        }
    }, [productList, id, setPrecio, setName, setDescripcion, setColor])
    const handlerSave = (event: any) => {
        event.preventDefault()
        dispatch(updateProdAction({
            id: Number.parseInt(id),
            name,
            precio,
            descripcion,
            color
        }))
        history.push('/products')
    }
    return productList.find(e => e.id === Number.parseInt(id)) ? (
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
    ) : (
            <div>Loading...</div>
        )
}

export default ProductDetail
