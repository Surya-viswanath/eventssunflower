import React, { Fragment } from 'react'

function CustomEventModal({ showModal, children }) {
    if (!showModal) {
        return null;
    }   
  return (
    <div>
       <Fragment>
            {children}
        </Fragment>
    </div>
  )
}

export default CustomEventModal
