import React from 'react'
import "./styles.css"

export const Search = ({ searchValue, handleChange }) => {
    return (
        <input 
            type="search"
            value={searchValue}
            onChange={handleChange}
            className="text-input"
            placeholder="Busca tus productos"
        /> 
    



    )
}
