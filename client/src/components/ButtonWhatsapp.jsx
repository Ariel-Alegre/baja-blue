import { BsWhatsapp } from 'react-icons/bs';
import styles from './ButtonWhatsapp.module.css'


export default function ButtonWhatsapp() {
    return (
        <div>


<a href="https://wa.me/+526241291126?text=Hello!%20I%20would%20like%20more%20information%20about%20your%20transportation%20services." 
   className={styles.whatsapp} 
   target="_blank" 
   rel="noopener noreferrer">
  <i className={styles.icon_whatsapp}>
    <BsWhatsapp />
  </i>
</a>

	</div>
    )
}