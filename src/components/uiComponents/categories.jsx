import optSvg from "../../assets/options.svg"
import "./categories.css"
// categories - массив категорий
export const Categories = ({ categories }) => {
    return (
        <>
            <div className="btl__settings">
                <div className="btl__list">
                    <div className="btl__point">
                        <a href="">All</a>
                    </div>
                    {categories.map(elem => {
                        return (
                            <>
                                <div className="btl__slide"></div>
                                <div className="btl__point">
                                    <a href="">{elem}</a>
                                </div>
                            </>
                        )
                    })}
                </div>
                <a href="" className="btl__simage">
                    <img src={optSvg} alt="" className="btl__image" />
                </a>
            </div>
        </>
    )
}