import { Link } from 'react-router-dom';

import style from './landind.module.css'

export function LandingPage() {
    return (
        <div className={style.container}>
            <img className={style.maincar} src="/router-task-yu/Car.svg" alt="" />
            <div className={style.title}>
                <h1>Explore your favority cars</h1>
                <h1>Enjoy the luxury</h1>
            </div>    
            <div>
                <p>Premium and prestige car daily rental</p>
                <p>Best prices</p>
            </div>
                <button className={style.Btnmain}> 
                    <Link to="/login" >
                        Let's start
                    </Link>
                </button>
          </div>
    )
}