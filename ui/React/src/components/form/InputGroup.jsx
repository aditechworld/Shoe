import React from 'react'

function InputGroup({ name, label, placeholder, id }) {
    return (
        <div>
            <label htmlFor={id} className='form-label mt-2'>
                {name}
            </label>
            <div class="input-group mb-3">
                <span class="input-group-text" id={id}>{label}</span>
                <input type="text" class="form-control" placeholder={placeholder} aria-label={id} aria-describedby={id} />
            </div>
        </div>
    )
}

export default InputGroup