import React from 'react'
import { Link} from "react-router-dom";

const SearchSugg = ({ isOpen, onClose,topPos }) => {
    const handleClose = ()=>{
        onClose()
      }
  return (
    <div className={`position-absolute z-3 container w-100 bg-transparent ${isOpen ? "d-flex" : "d-none"}`} onClick={handleClose} style={{top: topPos+"%",
        left: 4+"%",height:30+"vh"}}>
    <div >
        <div class="list-group" style={{width:34+"vw"}}>
        <Link to="/searches-criminal"><button type="button" class="list-group-item list-group-item-action " aria-current="true">
        Criminal Lawyer
        </button></Link>
        <button type="button" class="list-group-item list-group-item-action">Adv Ravi Sharma</button>
        <Link to="/searches-divorce"><button type="button" class="list-group-item list-group-item-action">Divorce Lawyer</button></Link>
        <button type="button" class="list-group-item list-group-item-action">Notaries</button>
        <button type="button" class="list-group-item list-group-item-action" >Mediators</button>
        </div>
    </div>
    </div>
  )
}

export default SearchSugg
