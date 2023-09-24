import React from 'react'

const SearchSugg = ({ isOpen, onClose }) => {
    const handleClose = ()=>{
        onClose()
      }
  return (
    <div className={`position-absolute z-3 container w-100 bg-transparent ${isOpen ? "d-flex" : "d-none"}`} onClick={handleClose} style={{top: 4.2+"%",
        left: 4+"%",height:30+"vh"}}>

    
    <div >
        <div class="list-group" style={{width:34+"vw"}}>
        <button type="button" class="list-group-item list-group-item-action " aria-current="true">
            The current button
        </button>
        <button type="button" class="list-group-item list-group-item-action">A second button item</button>
        <button type="button" class="list-group-item list-group-item-action">A third button item</button>
        <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
        <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
        </div>
    </div>
    </div>
  )
}

export default SearchSugg
