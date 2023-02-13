import "./App.css";
import { lazy, Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
// components
import Loader from "./components/loader/Loader";
// pages
const Welcome = lazy(() => import("./pages/welcome/Welcome"));
const Dash = lazy(() => import("./pages/dash/Dash"));
const DashForm = lazy(() => import("./pages/dash/DashForm"));
function App() {
  const handleImageDownload = () => {
    const element = document.getElementById("print");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "my-shedule.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const navigate = useNavigate();
  const [lessonsList, setLessonsList] = useState([]);
  const [addLessonFormData, setAddLessonFormData] = useState({
    name: "",
    day: "",
    startTime: "",
    endTime: "",
    color: "",
  });
  const [editeLesson, setEditeLesson] = useState({});
  const [error, setError] = useState(false);

  const handleDelete = (lesson) => {
    setLessonsList(lessonsList.filter((el) => el.id !== lesson.id));
  };
  const handleEdite = (lesson) => {
    setEditeLesson(lesson);
    navigate(`/dash/${lesson.id}`);
  };
  const backToDashPage = () => {
    setAddLessonFormData({
      lesson: "",
      day: "",
      startTime: "",
      endTime: "",
      color: "",
    });
    setEditeLesson({});
    navigate("/dash");
  };

  const handleEditeLessonInputChange = (e) => {
    setEditeLesson((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEditeLessOnSubmit = (e) => {
    e.preventDefault();
    if (
      editeLesson.name === "" ||
      editeLesson.day === "" ||
      editeLesson.startTime === "" ||
      editeLesson.endTime === "" ||
      editeLesson.color === ""
    ) {
      setError(true);
    } else {
      setError(false);
      const updatedLesson = lessonsList.map((lesson) => {
        return lesson.id === editeLesson.id ? editeLesson : lesson;
      });
      // setIsEditing(false);
      setLessonsList(updatedLesson);
      setEditeLesson({});
      navigate("/dash");
    }
  };
  const handleAddLessonInputChange = (e) => {
    setAddLessonFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAddLessOnSubmit = (e) => {
    e.preventDefault();
    if (
      addLessonFormData.name === "" ||
      addLessonFormData.day === "" ||
      addLessonFormData.startTime === "" ||
      addLessonFormData.endTime === "" ||
      addLessonFormData.color === ""
    ) {
      setError(true);
    } else {
      setError(false);
      setLessonsList((LessonsList) => {
        return [
          ...LessonsList,
          { id: lessonsList.length, ...addLessonFormData },
        ];
      });
      setAddLessonFormData({
        name: "",
        day: "",
        startTime: "",
        endTime: "",
        color: "",
      });
      navigate("/dash");
    }
  };
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />} />
          <Route path="dash">
            <Route
              index
              element={
                <Dash
                  lessonsList={lessonsList}
                  handleDelete={handleDelete}
                  handleEdite={handleEdite}
                  handleImageDownload={handleImageDownload}
                />
              }
            />
            <Route
              path="new"
              element={
                <DashForm
                  error={error}
                  formData={addLessonFormData}
                  backToDashPage={backToDashPage}
                  handleChange={handleAddLessonInputChange}
                  onSubmit={handleAddLessOnSubmit}
                  buttonText="افزودن"
                  title="افزودن درس جدید"
                />
              }
            />
            <Route
              path=":id"
              element={
                <DashForm
                  error={error}
                  formData={editeLesson}
                  backToDashPage={backToDashPage}
                  handleChange={handleEditeLessonInputChange}
                  onSubmit={handleEditeLessOnSubmit}
                  buttonText="تغییر"
                  title="تغییر درس"
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
