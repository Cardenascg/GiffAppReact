import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (newCategory) => {
        const existCategory = categories.find(x => x.toLowerCase() === newCategory.toLowerCase());
        existCategory === undefined && setCategories([newCategory,...categories])
    }
    console.log(categories)
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
            />
            <button onClick={onAddCategory('valorant')}>Agregar</button>
            {
                categories.map(category => 
                    (
                        <GifGrid key={category} category={category}/>
                    )
                )
            }
        </>
    )
}