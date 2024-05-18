import { UserCircle } from '@phosphor-icons/react'
import React from 'react'
import './ticket.css'

const Ticket = () => {
    return (
        <div className='ticket'>
            <UserCircle size={20} color="#6210f9" weight="duotone" />
            <span>Locy Johnson</span>
           <input type="checkbox" name="check" id="ch" className='checkbox-round'/>
        </div>
    )
}

export default Ticket