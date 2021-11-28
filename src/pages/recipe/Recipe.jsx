import { useParams } from 'react-router'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import './Recipe.css'

export default function Recipe() {
    const { id } = useParams()
    const url = 'http://localhost:3000/recipes/' + id
    const { data: recipe, isPending, error } = useFetch(url)
    const { mode } = useTheme()

    console.log(recipe);

    return (
        <div className={`recipe ${mode}`}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    )
}
