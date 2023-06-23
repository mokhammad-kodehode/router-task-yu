import React from 'react';
import { CarDetails } from '../../../components/finalcard/FinalCard';
import style from './style.module.css';
import { useParams } from 'react-router-dom';
import { carArray } from '../CarsPageData'


export function CarPage() {
    const { carName } = useParams();
    const carData = carArray.find((car) => car.carName === carName);
    return (
        <div className={style.container}>
            <CarDetails carData={carData} />
        </div>
    );
}