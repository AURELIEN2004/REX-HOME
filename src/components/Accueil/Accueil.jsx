import React from 'react'
import './Accueil.scss'

const Accueil = () => {

  return (
     
    <div className='Navbar'> 
       <div className='Laptop'>
          <h2 className='logo'>
            REXHOME
       </h2>
       <div className="navigation">
        <ul className="links-conteneur">
          <li className="link"> Residence</li>
          <li className="link"> Nos valeurs</li>
          <li className="link"> Contact</li>
          <li className="link"> A propos</li>
          <li className="link"> Contact</li>
        </ul>
       </div>
    </div>
  </div>
  )
}

export default Accueil
