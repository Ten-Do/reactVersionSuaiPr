export const TaskInfo = () => {

    return (
        <>
            <div className="bodytask">
                <div className="container">
                    <div className="bt__content">
                        <div className="bt__title">
                            Matreshka
                        </div>
                        <div className="bt__description">
                            Сдув пыль с трёхдюймовой дискеты, вы решили <br />оттянуться в Дум. Но вы вспомнили, что в <br />былые времена где-то рядом с кишками и <br />супер-шотганами вы спрятали флаг, а потом <br />стёрли файл! Надеюсь, он ещё не <br />перезаписался чем-нибудь другим.
                        </div>
                        <div className="bt__forms">
                            <div className="bt__files">
                                <button className="bt__b1">Matreshka.zip</button>
                                <button className="bt__b2">.256sha</button>
                            </div>
                            <div className="bt__actions">
                                <input type="text" placeholder="Flag" className="bt__input" />
                                <button className="bt__b3">Ответить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}