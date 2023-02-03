import "./auth.css";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { GrSecure } from "react-icons/gr";
import { FaUniversity } from "react-icons/fa";

const Register = () => {
  return (
    <section className="auth">
      <header className="auth_header">
        <h1 className="auth_header_title section-title">ایجاد حساب کاربری</h1>
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
          <div className="auth_main_form_group">
            <input
              type="text"
              className="auth_main_form_group_input"
              name="university"
              placeholder="دانشگاه (jsu)"
            />
            <div className="auth_main_form_group_icon">
              <FaUniversity />
            </div>
          </div>
          <button className="auth_main_form_btn">ورود</button>
        </form>
      </main>
      <footer className="auth_footer">
        <Link to="/login" className="auth_footer_link">
          ورود به حساب کاربری
        </Link>
      </footer>
    </section>
  );
};

export default Register;
