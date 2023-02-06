import { Categories } from "../../uiComponents/categories"
import arrowBtnSvg from "../../../assets/arrowBtn.svg"
import { useTasks, useUser } from "../../../store/store"
import { useEffect } from "react"
import { shallow } from 'zustand/shallow'
import "./tasks.css"


export const Tasks = () => {
    // tasks - массив задач
    // loadTasks - загружает задачи с сервера
    const { tasks, loadTasks } = useTasks(state => ({ tasks: state.tasks, loadTasks: state.loadTasks }), shallow);

    // категории пользователя
    const userCategories = useUser(state => state.categories, shallow);

    // эта хуйня отвечает за то чтоб данные загрузились при открытии странички
    useEffect(() => {
        loadTasks(userCategories)
    }, []);

    // эт для отладки
    console.log(tasks)

    // возвразаем разметку
    return (
        <>
            <div className="bodytasklist" >
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={userCategories} />
                        <div className="btl__cards">
                            {tasks.map(task => (
                                <div className="btl__card" key={task.id} id={task.id}>
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