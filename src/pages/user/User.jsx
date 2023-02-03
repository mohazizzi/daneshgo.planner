import "./user.css";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import UserLessons from "./UserLessons";
import UserForm from "./UserForm";

const User = () => {
  const [lessonsList, setLessonsList] = useState([
    {
      id: 1,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#52AD9C",
    },
    {
      id: 2,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#D7C1E0",
    },
    {
      id: 3,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#F3DCAD",
    },
    {
      id: 4,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#F1935C",
    },
    {
      id: 5,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#AC92FA",
    },
    {
      id: 6,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#FF8484",
    },
    {
      id: 7,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#A6A6A8",
    },
    {
      id: 8,
      name: "نام درس",
      day: "روز هفته",
      startTime: "8",
      endTime: "10",
      color: "#96C99C",
    },
  ]);
  const [isAddingLesson, setIsAddingLesson] = useState(false);
  const [addNewLessonFormData, setAddNewLessonFormData] = useState({
    lesson: "",
    day: "",
    startTime: "",
    endTime: "",
    color: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editeLesson, setEditeLesson] = useState({});

  function handleDelete(lesson) {
    setLessonsList(lessonsList.filter((el) => el.id !== lesson.id));
  }
  function handleEdite(lesson) {
    setIsEditing(true);
    setIsAddingLesson(false);
    setEditeLesson(lesson);
  }
  function closeEditingLessonFormHandle() {
    setIsEditing(false);
    setEditeLesson({});
  }
  function closeAddNewLessonFormHandle() {
    setIsAddingLesson(false);
    setAddNewLessonFormData({
      lesson: "",
      day: "",
      startTime: "",
      endTime: "",
      color: "",
    });
  }

  const handleEditeLessonInputChange = (e) => {
    setEditeLesson((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEditeLessOnSubmit = (e) => {
    e.preventDefault();
    const updatedLesson = lessonsList.map((lesson) => {
      return lesson.id === editeLesson.id ? editeLesson : lesson;
    });
    setIsEditing(false);
    setLessonsList(updatedLesson);
    setEditeLesson({});
  };

  function handleAddLessonInputChange(e) {
    setAddNewLessonFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleAddLessOnSubmit(e) {
    e.preventDefault();
    setLessonsList((LessonsList) => {
      return [
        ...LessonsList,
        { id: lessonsList.length, ...addNewLessonFormData },
      ];
    });
    setIsAddingLesson(false);
    setAddNewLessonFormData({
      lesson: "",
      day: "",
      startTime: "",
      endTime: "",
      color: "",
    });
  }

  return (
    <section className="user">
      <header className="user_header">
        <h1 className="user_header_title section-title">پنل کاربری</h1>
      </header>
      <main className="user_main">
        <div className="user_main_list">
          {lessonsList.map((lesson) => (
            <UserLessons
              key={lesson.id}
              lesson={lesson}
              handleDelete={handleDelete}
              handleEdite={handleEdite}
            />
          ))}
        </div>
      </main>
      <footer className="user_footer">
        <button
          className="user_footer_btn-add"
          onClick={() => setIsAddingLesson(true)}
        >
          <BsPlusLg />
        </button>
        <button className="user_footer_btn-download">
          دانلود برنامه هفتگی
        </button>
        <button className="user_footer_btn-download">
          دانلود برنامه امتحانی
        </button>
      </footer>
      {isAddingLesson && (
        <UserForm
          closeForm={closeAddNewLessonFormHandle}
          formData={addNewLessonFormData}
          handleChange={handleAddLessonInputChange}
          onSubmit={handleAddLessOnSubmit}
          buttonText="افزودن"
        />
      )}
      {isEditing && (
        <UserForm
          closeForm={closeEditingLessonFormHandle}
          formData={editeLesson}
          handleChange={handleEditeLessonInputChange}
          onSubmit={handleEditeLessOnSubmit}
          buttonText="اعمال تغییرات"
        />
      )}
    </section>
  );
};

export default User;
