import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Login.module.less";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (id.trim() && password.trim()) {
      // 로그인 검증 로직 추가 가능
      navigate("/main"); // 메인 페이지로 이동
    } else {
      alert("아이디와 비밀번호를 입력해주세요.");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}></div>
      <div className={style.main}>
        <div className={style.title}>반갑습니다.</div>
        <div className={style.joinbox}>
          <input
            type="text"
            placeholder="아이디"
            id="id"
            className={style.box}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="password"
            className={style.box}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={style.join} onClick={handleLogin}>
            로그인
          </div>
        </div>
        <div className={style.sub}>
          <div className={style.title1}>혹시, 계정을 잊으셨나요?</div>
          <div className={style.join}>계정 찾기</div>
          <div className={style.title2}>
            <div>계정이 없으신가요?</div>
            <p>가입하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
