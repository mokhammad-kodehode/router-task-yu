
import style from './styles.module.css'
import { carArray } from './CarsPageData';
import { CarCard } from '../../components/cardcard/CarCard';

const CarCards = carArray.map((car) => (
    <CarCard
    key={car.id}
    carName={car.carName}
    imgSrc={car.imgSrc}
    description={car.description}
    speed={car.speed}
    accel= {car.accel}
    descriptionTwo= {car.descriptionTwo}
    />
  ))

export function CarsPage() {
    return (
        <div className={style.container}>
            <h1>CarsPage</h1>
            {CarCards}
        </div>
    )
}