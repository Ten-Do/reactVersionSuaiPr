import { Categories } from "../../uiComponents/categories"
import arrowBtnSvg from "../../../assets/arrowBtn.svg"
import "./tasks.css"
import { useTasks } from "../../../store/store"
import { useEffect } from "react"

export const Tasks = () => {
    const [tasks, setTasks] = useTasks(state => state.tasks, state => state.setTasks);
    useEffect(() => { setTasks() }, []);

    return (
        <>
            <div className="bodytasklist">
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={['stegano', 'admin', 'ppc', 'web']} />
                        <div className="btl__cards">

                            {tasks.map(task => (
                                <div className="btl__card">
                                    <div className="btl__card_content">
                                        <div className="btl__title">
                                            {task.title}
                                        </div>
                                        <div className="btl__description">
                                            {task.description}
                                        </div>
                                        <div className="btl__actions">
                                            <div className="btl__points">
                                                {task.points} очков
                                            </div>
                                            <div className="btl__getcard">
                                                <a href="./task.html"><img src={arrowBtnSvg} alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}