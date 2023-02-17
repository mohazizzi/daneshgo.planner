import "./dash.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { HiDocumentAdd, HiDocumentDownload } from "react-icons/hi";
import DashLesson from "./DashLesson";
import Schedule from "./Schedule";

const Dash = ({
  lessonsList,
  handleDelete,
  handleEdite,
  handleImageDownload,
}) => {
  const daysOfWeek = [
    "شنبه",
    "یک شنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
  ];
  const handleDownload = () => {
    setMenu(false);
    handleImageDownload();
  };
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prevState) => !prevState);

  const maxHeight = {
    height: window.innerHeight,
  };

  return (
    <div className="dash" style={maxHeight}>
      <div className="container">
        <header className="dash_header">
          <h1 className="dash_header_title section-title">لیست درس ها</h1>
        </header>
        <main className="dash_main">
          {lessonsList.length === 0 && (
            <div className="dash_main_empty">
              <p className="dash_main_empty_title">لیست درسها خالی است!!</p>
              <p className="dash_main_empty_sub">
                لطفا درسهای خود را اضافه کنید
              </p>
            </div>
          )}
          {lessonsList.map((lesson) => (
            <DashLesson
              key={lesson.id}
              lesson={lesson}
              handleDelete={handleDelete}
              handleEdite={handleEdite}
            />
          ))}
        </main>
        <footer className="dash_footer">
          <button className="dash_footer_toggler" onClick={toggleMenu}>
            <CgMenuRight />
          </button>
          <ul className="dash_footer_menu">
            <li className={`dash_footer_menu_item ${menu && "bottom-1"}`}>
              <Link
                to="/dash/new"
                className="dash_footer_menu_item_link"
                onClick={() => setMenu(false)}
              >
                <HiDocumentAdd />
              </Link>
            </li>
            <li className={`dash_footer_menu_item ${menu && "bottom-2"}`}>
              <button
                className="dash_footer_menu_item_link"
                onClick={handleDownload}
              >
                <HiDocumentDownload />
              </button>
            </li>
          </ul>
        </footer>
      </div>
      <div className="schedule" id="print">
        <div className="schedule_header">
          <div className="schedule_header_weekdays">
            <p>روز هفته</p>
          </div>
          <div className="schedule_header_hours">
            <span className="span1">۸</span>
            <span className="span2">۹</span>
            <span className="span3">۱۰</span>
            <span className="span4">۱۱</span>
            <span className="span5">۱۲</span>
            <span className="span6">۱۳</span>
            <span className="span7">۱۴</span>
            <span className="span8">۱۵</span>
            <span className="span9">۱۶</span>
            <span className="span10">۱۷</span>
            <span className="span11">۱۸</span>
            <span className="span12">۱۹</span>
          </div>
        </div>
        {daysOfWeek.map((day, index) => (
          <div className="schedule-day" key={index}>
            <div className="schedule_body">
              <div className="schedule_body_weekdays">
                <p>{day}</p>
              </div>
              <div className="schedule_body_hours">
                {lessonsList.map(
                  (lesson) =>
                    lesson.day === day && (
                      <Schedule key={lesson.id} lesson={lesson} />
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dash;
