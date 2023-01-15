import { useState } from "react";


function AuthReg({ type, setType }) {
  const nameList =
    type === "reg"
      ? ["Email", "Username", "Password"]
      : ["Username", "Password"];
  return (
    <div className="AuthReg-body">
      <Header type={type} />
      <Input nameList={nameList} />
      <Footer
        type={type}
        setType={setType}
      />
    </div>
  );
}

function Img({ type }) {
  return (
    <div className="Img">
      <img
        src={type === "reg" ? regIcon : logIcon}
        alt={type === "reg" ? "regIcon" : "logIcon"}
      />
    </div>
  );
}

function AuthRegContainer({ initial }) {
  const [type, setType] = useState(initial);

  return (
    <div className="AuthReg">
      <AuthReg
        type={type}
        setType={setType}
      />
      <Img type={type} />
    </div>
  );
}

export default AuthRegContainer;
