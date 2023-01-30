import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./header/header";
/*
import { Footer } from "./footer/footer";
import { Loader } from "./ui/loader/loader";
*/
export const Layout = () => {
  const { state } = useNavigation();

  return (
    <div className="wrapper">
      <Header />
      {state !== "idle" ? <>Loader </> : null}
      <main className="page">
        <Outlet></Outlet>
      </main>
      <>Footer </>
    </div>
  );
};
