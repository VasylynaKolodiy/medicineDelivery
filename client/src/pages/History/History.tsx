import './History.scss';
import {useEffect, useState} from "react";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import Button from "@mui/material/Button";
import {useGetOrdersQuery} from "../../store/products/products.api";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const History = () => {
    const [email, setEmail] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const {data: orders, isLoading, error, refetch} = useGetOrdersQuery({email}, {cacheTime: 0});

    const handleChangeEmail = (e) => {
        setEmailInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailInput.trim() !== '' && email !== emailInput) {
            setEmail(emailInput);
        }
    }

    useEffect(() => {
        if (email !== '') {
            refetch();
        }
    }, [email, refetch]);

    return (
        <div className='history'>
            <ValidatorForm className='form' onSubmit={handleSubmit}>
                <div className='form__item'>
                    <TextValidator
                        value={emailInput}
                        name='email'
                        type="text"
                        placeholder='Email'
                        variant="outlined"
                        onChange={handleChangeEmail}
                        validators={['required']}
                        errorMessages={['This field is required']}
                    />
                </div>
                <Button
                    type='submit'
                    className="buttonOrder"
                    variant="outlined"
                    disabled={!emailInput}
                >
                    Find
                </Button>
            </ValidatorForm>

            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {!email && <div>Please enter your email.</div>}
            {orders?.length > 0 ? (
                <div className="orders-container">
                    {orders.slice().reverse().map((order, index) => (
                        <div key={index} className="order">
                            <Accordion className="custom-accordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel-content"
                                    className="accordion-summary"
                                >
                                    <p>Order №{orders.length - index}</p>
                                    <p><b>{order.total}₴</b></p>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <ol className="product-list">
                                        {order.products.map((product, productIndex) => (
                                            <li key={productIndex}>
                                                <p>{product.title}</p>
                                                <p>{product.quantity}pcs.</p>
                                                <p>{product.price}₴</p>
                                            </li>

                                        ))}
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}
                </div>
            ) : email && (
                <h4>You have not placed any orders yet.</h4>
            )}
        </div>
    );
}

export default History;
