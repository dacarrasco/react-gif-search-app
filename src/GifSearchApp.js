import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifSearchApp = () => {

    
    const [categories, setCategories] = useState([])
    
    

    return (
        <div>
            <h2>GifSearchApp</h2>
         
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category) =>
                        
                         <GifGrid
                            key = { category }
                            category={ category }
                        />
                        
                    )

                }
            
            </ol>    
        </div>
    )
}
