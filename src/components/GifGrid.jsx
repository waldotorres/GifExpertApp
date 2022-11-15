import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  
    const { img, isLoading } = useFetchGifs(category)

    return (
    <>

        <h3>{ category }</h3>
         { isLoading&& (<h2>Cargando...</h2>) }
        <div className="card-grid">
        { img.map( e=>{
            return <GifItem key={e.id} img = {e} />
        } ) }

        </div>
        
    </>
  )
}
