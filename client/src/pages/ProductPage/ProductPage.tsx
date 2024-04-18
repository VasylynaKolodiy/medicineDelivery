import React from 'react';
import {useParams} from 'react-router-dom';
import {useGetProductByIdQuery} from "../../store/products/products.api";
import './ProductPage.scss';

const ProductPage = () => {
    const {id} = useParams();
    const {data: product} = useGetProductByIdQuery({id});

    return (
        product && (
            <section className='product'>
                <div className='product__info'>
                    <div className='product__image'>
                        <img src={product.image}/>
                    </div>
                    <div className='product__details'>
                        <h2 className='product__title'>{product.title}</h2>
                        <h3 className='product__price'>Price: {product.price}₴</h3>
                        <p className='product__description'>{product.description}</p>
                    </div>
                </div>
            </section>
        )
    );
};

export default ProductPage;