import "./dash.css";
import { HiTrash } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";

const DashLesson = ({ lesson, handleDelete, handleEdite }) => {
  const lessonColor = {
    backgroundColor: lesson.color,
  };

  return (
    <div className="lesson" style={lessonColor}>
      <div className="lesson_info">
        <p className="lesson_info_title">{lesson.name}</p>
        <p className="lesson_info_day">
          {lesson.day} از ساعت {lesson.startTime} تا {lesson.endTime}
        </p>
      </div>
      <div className="lesson_btn-group">
        <button
          className="lesson_btn-group_edit"
          onClick={() => handleEdite(lesson)}
        >
          <AiFillEdit />
        </button>
        <button
          className="lesson_btn-group_delete"
          onClick={() => handleDelete(lesson)}
        >
          <HiTrash />
        </button>
      </div>
    </div>
  );
};

export default DashLesson;
