import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (

    <div
        data-testid="menu-item-container"
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}  >
        <div data-testid="background-image-container" className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content' >
            <h1 className='title' >{title.toUpperCase()}</h1>
            <span className='subtitle' >SHOP NOW</span>
        </div>
    </div>
)


export default withRouter(MenuItem);