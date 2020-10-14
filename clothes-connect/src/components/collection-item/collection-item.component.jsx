import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.actions'
import './collection-item.styles.scss';


export const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item' >
            <div
                data-testid="background-image"
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer' >
                <span data-testid="name" className='name' > {name} </span>
                <span data-testid="price" className='price' > {price} </span>

            </div>
            <CustomButton data-testid='add-button' onClick={() => addItem(item)} inverted >Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem)