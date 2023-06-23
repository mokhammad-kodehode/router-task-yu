
import style from './styles.module.css'
import { Link } from 'react-router-dom';

export function CarDetails(props) {
    const { carData } = props;

  return (
    <div className={style.container}>
       <h1>{carData.carName}</h1>
           <img src={carData.imgSrc} alt={carData.carName} />
           <table>
              <tbody>
                  <tr>
                     <th>{carData.speed}</th>
                     <td>{carData.description}</td>
                  </tr>
                  <tr>
                      <th>{carData.accel}</th>
                      <td>{carData.descriptionTwo}</td>
                 </tr>
                  <tr>
                     <th>{carData.passengers}</th>
                     <td>{carData.descriptionTree}</td>
                  </tr>
             </tbody>
          </table>
          <button > 
                    <Link to="/form" >
                        Test drive now
                    </Link>
                </button>
      </div>
  );
}