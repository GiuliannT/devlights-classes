import { LoginForm } from "./LoginForm";
import { LoginHero } from "./LoginHero";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login({ onSuccess }) {
  const navigate = useNavigate();

  function onLoginFormSuccess() {
    navigate('/');
    onSuccess();
  }

  return (
    <main className="Login">
      <section className="LoginHeroContainer">
        <LoginHero />
      </section>
      <section className="LoginFormContainer">
        <LoginForm onSuccess={onLoginFormSuccess} />
      </section>
    </main>
  );
}