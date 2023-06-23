import style from './style.module.css';


export function DonePage() {
    return (
        <div className={style.container}>
            <div className={style.circle}>
            ✓
            </div>
            <p>Completed. We have sent an email to you with more information.</p>
        </div>
    )
}