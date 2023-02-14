import React from "react";
import '../../styles/about.css';


const Buttons = () => {
    return (
        <div className='button-group'>
            <div className='single-button'>
                <h3 className="button-number">01</h3>
                <h3 className="button-label">Overview</h3>
            </div>
            <div className='single-button'>
                <h3 className="button-number">02</h3>
                <h3 className="button-label">Internal Structure</h3>
            </div>
            <div className='single-button'>
                <h3 className="button-number">03</h3>
                <h3 className="button-label">Surface Geology</h3>
            </div>
            
        </div>
    )
}

export default Buttons;