import styles from './BenefitCover.module.css'



const BenefitCover = ({icon, topic, text}) => {
  return (
    <> 
    <div className={styles['Card']}>
        <div className={styles['Card-Icon']} >
            {icon}
        </div>
        <div className={styles['Card-Text']} >
        <p className={styles['Card-Topic']}>{topic}</p>
        <p className={styles['Card-Description']}>{text}
        </p>
        </div>
    </div>
    </>
  )
}

export default BenefitCover