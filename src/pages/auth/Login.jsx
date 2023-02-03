import "./auth.css";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { GrSecure } from "react-icons/gr";

const Login = () => {
  return (
    <section className="auth">
      <header className="auth_header">
        <h1 className="auth_header_title section-title">ورود به حساب کاربری</h1>
      </header>
      <main className="auth_main">
        <form className="auth_main_form">
          <div className="auth_main_form_group">
            <input
              type="text"
              className="auth_main_form_group_input"
              name="userName"
              placeholder="username"
            />
            <div className="auth_main_form_group_icon">
              <HiUsers />
            </div>
          </div>
          <div className="auth_main_form_group">
            <input
              type="password"
              className="auth_main_form_group_input"
              name="password"
              placeholder="password"
            />
            <div className="auth_main_form_group_icon">
              <GrSecure />
            </div>
          </div>
          <button className="auth_main_form_btn">ورود</button>
        </form>
      </main>
      <footer className="auth_footer">
        <Link to="/register" className="auth_footer_link">
          ساخت حساب کاربری
        </Link>
      </footer>
    </section>
  );
};

export default Login;
