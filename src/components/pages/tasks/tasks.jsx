import { Categories } from "../../uiComponents/categories"
import arrowBtnSvg from "../../../assets/arrowBtn.svg"
import "./tasks.css"


export const Tasks = () => {

    return (
        <>
            <div className="bodytasklist">
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={['stegano', 'admin', 'ppc', 'web']} />
                        <div className="btl__cards">
                            <div className="btl__card">
                                <div className="btl__card_content">
                                    <div className="btl__title">
                                        Matreshka
                                    </div>
                                    <div className="btl__description">
                                        Сдув пыль с <br />трехдюймовой дискеты...
                                    </div>
                                    <div className="btl__actions">
                                        <div className="btl__points">
                                            50 очков
                                        </div>
                                        <div className="btl__getcard">
                                            <a href="./task.html"><img src={arrowBtnSvg} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}