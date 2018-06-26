import React from 'react'

const AlertError = (props) => (
    <div>
       <div className="alert alert-error alert-dismissible fade show" role="alert">
            <strong></strong> {props.text} 
             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
)

export default AlertError;