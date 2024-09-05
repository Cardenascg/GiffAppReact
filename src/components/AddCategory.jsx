import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');
    const [isError, setIsError] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        inputValue.length === 0 ?
            setIsError(true)
            :
            (
                // setCategories(categories => [...categories, inputValue]),
                setIsError(false),
                onNewCategory(inputValue.trim()),
                setInputValue('')
            )
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                className={isError ? 'error':'punk' }
            placeholder="Buscar Gifs"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            />
        </form>
    )
}