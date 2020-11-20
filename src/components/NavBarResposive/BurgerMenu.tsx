import React from 'react';

import '../../styles/global.css';
import './style.css';

function Burgermenu(props: any){

    return (
        <div className="wrapper" onClick={props.handleNavbar}>
            <div className={ props.navbarState ? "open" : "" }>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
        </div>
    );
}

export default Burgermenu;