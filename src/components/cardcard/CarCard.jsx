/* eslint-disable react/prop-types */

import style from './styles.module.css'
import { Link } from 'react-router-dom';

export function CarCard(props) {

    const { carName, imgSrc} = props;

    return (
        <div className= {style["card"]}>
            <h1>{carName}</h1>
            <img  src={imgSrc} alt={carName} />
          <button > 
                    <Link to={`/cars/${carName}`} >
                        Test drive now
                    </Link>
                </button>
        </div>
        
    )
}