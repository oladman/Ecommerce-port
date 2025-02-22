import styles from './Benefit.module.css'
import BenefitCover from "./BenefitCover"
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";
const Benefit = () => {
  return (
    <div className={styles['cover']}>
   
    <BenefitCover icon={<TbTruckDelivery size={40} style={{ color:'#1b4d3e' }}  />} topic="FAST DELIVERY" text="Your order is on its way before you even blink! Ultra-fast delivery, guaranteed!" />
    <BenefitCover icon={<AiFillSafetyCertificate size={40} style={{ color:'#1b4d3e' }} />} topic="ORDER PROTECTION" text="Your order is safeguarded under our advanced protection framework." />
    <BenefitCover icon={<FaMoneyCheckDollar size={40} style={{ color:'#1b4d3e' }} />} topic="RETURN POLICY" text="Enjoy peace of mind with our up to 7-day return policy, terms and conditions apply!" />
    </div>
  )
}

export default Benefit