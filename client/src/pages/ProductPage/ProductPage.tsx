import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useGetProductByIdQuery} from "../../store/products/products.api";
import './ProductPage.scss';
import {useAppSelector} from "../../hooks/redux";
import {useActions} from "../../hooks/actions";
import {Button} from "@mui/material";

const ProductPage = () => {
    const {id} = useParams();
    const {data: product} = useGetProductByIdQuery({id});
    const basket = useAppSelector((state) => state.products.basket);
    const {editBasket} = useActions()

    const handleAddToBasket = () => {
        editBasket(({...basket, [product._id]: {...product, quantity: 1}}))
    }

    return (
        product && (
            <section className='product'>
                <div className='product__info'>
                    <div className='product__image'>
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <div className='product__details'>
                        <h2 className='product__title'>{product.title}</h2>
                        <h3 className='product__price'>Price: {product.price}₴</h3>
                        <p className='product__description'>{product.description}</p>

                        {!basket.hasOwnProperty(product._id)
                            ? (<Button
                                className='product__buyButton'
                                variant="outlined"
                                onClick={handleAddToBasket}
                            >
                                Add to basket
                            </Button>)
                            : <Link to='/basket' className='productCard__inBasket'>Already in the basket</Link>
                        }
                    </div>
                </div>
            </section>
        )
    );
};

export default ProductPage;