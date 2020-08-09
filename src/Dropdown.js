import React from 'react';

const Dropdown = (props) => {

    const { tooltipDir, arrow, listOpen, selectDirection, displayDropdown } = props;

    function isOpen() {
        if (listOpen)
            return 'dropdownOpen'
        else
            return 'dropdownClose'
    }

    return (
        <div>
            <div className="title">Select tooltip direction :</div>
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => displayDropdown()}>
                    <div className="dd-title">{tooltipDir}</div>
                    <img className="arrow" src={arrow}></img>
                </div>

                <ul className={isOpen()}>
                    <li onClick={() => selectDirection('top')}>Top</li>
                    <li onClick={() => selectDirection('bottom')}>Bottom</li>
                    <li onClick={() => selectDirection('left')}>Left</li>
                    <li onClick={() => selectDirection('right')}>Right</li>
                </ul>
            </div>
        </div>
    )

}

export default Dropdown;