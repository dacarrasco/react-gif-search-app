import React, { useState } from 'react' ; 
import PropTypes  from 'prop-types' ;

export const AddCategory = ({ setCategories }) => {

    const[ inputValue, setInputValue] = useState();

    const handleInputChange = (e) =>{
            setInputValue(e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.length > 2) {
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
        }
           
    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input 
            type = "text" 
            value = {inputValue}
            onChange={ handleInputChange}
            /> 

        </form>  
        
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;