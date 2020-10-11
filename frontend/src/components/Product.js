import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
    const {product} = props;

    return (
        <Card className='my-3 p-3 rounded'>
            <Link className='cardImg' to={`/product/${product._id}`}>
                <Card.Img className='img' src={product.image} variant='top'/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={` ${product.numReviews} reviews`}/>
                </Card.Text>
                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
