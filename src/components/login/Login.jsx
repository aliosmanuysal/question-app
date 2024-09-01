import "./Login.css";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";

function Login() {
  const { setIsAppVisible } = useContext(appContext);

  function buttonClicked() {
    setIsAppVisible((prev) => !prev);
  }

  return (
    <div className="login">
      <p className="login-title"><h1>QUESTION APP</h1></p>
      <button onClick={buttonClicked} id="start">
        Teste Başla
      </button>
      <p className="login-para">
        Teste Hoşgeldiniz. Bu test 10 sorudan oluşmaktadır. Başarılar! 🖖
        <br />
        Lütfen "Teste Başla" butonuna sakince tıklayarak teste başlayınız.
      </p>
    </div>
  );
}

export default Login;