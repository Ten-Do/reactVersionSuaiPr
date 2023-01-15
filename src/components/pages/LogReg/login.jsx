export const Login = () => (
    <>
        <header>
        <div id="guap-panel">
            <img id="guap-logo" src="../../../assets/guap.svg" />
        </div>

    </header>
     <div id="fixed-container">
		<div id="form">
			<h1>Авторизация</h1>
			<form action="profile" method="post">
				<label className="form-label">Email</label>
				<input className="normal-input" type="email" required size="40" placeholder="Введите Email..." />
				<label className="form-label">Пароль</label>
				<input className="normal-input" type="password" required size="40" placeholder="Введите пароль..." />

                <button type="submit" className="reg-complete">Авторизоваться</button>
			</form>
		</div>
	</div>
    </>
)