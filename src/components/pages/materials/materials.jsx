import { Categories } from "../../uiComponents/categories"
import { useMaterials } from "../../../store/store"
import { useEffect } from "react"

export const Materials = () => {
    const {materials, loadMaterials} = useMaterials(state => ({materials: state.materials, loadMaterials: state.loadMaterials}));
    useEffect(() => { loadMaterials(); }, []);
    console.log(materials)
    return (
        <>
            <div className="bodytasklist">
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={['stegano', 'admin', 'ppc', 'web']} />
                        <div className="btl__cards">

                        

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}