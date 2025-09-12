import React from 'react'
import { useProducts } from './ProviderContext'

const ProductList = () => {
    const { loading, list } = useProducts();

    return (
        <div>
            <h3>Product Context</h3>

            {loading ?
                <p>Loading...</p> :
                <ul>
                    {list?.map((v) => {
                        return (
                            <li key={v.id}>
                                {v.title}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default ProductList
