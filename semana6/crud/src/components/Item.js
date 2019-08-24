import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ title, image, desc, select, id, deleteItem }) => {
    return (
        <div className='col-4'>
            <div className='card' style={{ width: '18rem' }}>
                <img
                    className='card-img-top'
                    src={image}
                    alt='Imagem de capa do card'
                />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{desc}</p>
                    <Link
                        to='/show/'
                        onClick={() => select({ title, image, desc })}
                        className='btn btn-info'
                    >
                        Ver
                    </Link>
                    {'    '}
                    <Link
                        to='/edit/'
                        className='btn btn-primary'
                        onClick={() => select({ title, image, desc, id })}
                    >
                        Editar
                    </Link>
                    {'    '}
                    <a
                        href='/'
                        className='btn btn-danger'
                        onClick={e => {
                            e.preventDefault()
                            if (
                                window.confirm(
                                    'Are you sure you wish to delete this item?'
                                )
                            )
                                deleteItem(id)
                        }}
                    >
                        Deletar
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Item
