import "./welcome.css";
import { Link } from "react-router-dom";
import exampleImage from "../../assets/img/schedule_example.png";

const welcomContent = {
  header: "خوش آمدید",
  body: "با استفاده از این وبسایت میتونید برنامه ی درسیتون در طول هفته رو به شکل قالب بالا داشته باشید",
  footer: "ساخت برنامه هفتگی",
};

const Welcome = () => {
  return (
    <section className="welcome">
      <header className="welcome_header">
        <h1 className="welcome_header_title section-title">
          {welcomContent.header}
        </h1>
      </header>
      <main className="welcome_main">
        <img
          src={exampleImage}
          className="welcome_main_image"
          alt="نمونه ای از برنامه هفتگی ساخته شده"
        />

        <p className="welcome_main_text">{welcomContent.body}</p>
      </main>
      <footer className="welcome_footer">
        <Link to="/login" className="welcome_footer_link">
          {welcomContent.footer}
        </Link>
      </footer>
    </section>
  );
};

export default Welcome;
