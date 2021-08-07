import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProdAction } from '../../store/products/actions'
import { productListSelector } from '../../store/products/selectors'
import Swal from 'sweetalert2'

const ProdList = () => {
    const prodList = useSelector(productListSelector)
    const dispatch = useDispatch()

    const handlerDelete = (id: any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProdAction(id))
            }
          })

        
    }
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Listado
                        <div className="btn-group">
                            <Link className="btn btn-link" to="/products/create">Nuevo</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        {prodList.length > 0 ? (<table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                    <th>Color</th>
                                    <th className="text-end">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {prodList.map((u: any) => (
                                    <tr key={u.id}>
                                        <td>
                                            <div className="badge bg-dark">
                                                {u.id}
                                            </div>
                                        </td>
                                        <td>{u.name}</td>
                                        <td>{u.precio}</td>
                                        <td>{u.descipcion}</td>
                                        <td>{u.color}</td>
                                        <td className="text-end">
                                            <div className="btn-group">
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handlerDelete(u.id)}
                                                >eliminar</button>
                                                <Link
                                                    className="btn btn-sm btn-primary"
                                                    to={`/products/detail/${u.id}`}
                                                >detalle</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>) : (
                                <div className="alert alert-danger">
                                    No existen elementos
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdList