const Schedule = ({ lesson }) => {
  const getWidth = (number1, number2) => {
    let result = (number2 - number1) * 90;
    return `${result}px`;
  };
  const getPosition = (number) => {
    if (number === 8) {
      return 0;
    } else if (number === 9) {
      return "90px";
    } else if (number === 10) {
      return "180px";
    } else if (number === 11) {
      return "270px";
    } else if (number === 12) {
      return "360px";
    } else if (number === 13) {
      return "450px";
    } else if (number === 14) {
      return "540px";
    } else if (number === 15) {
      return "630px";
    } else if (number === 16) {
      return "720px";
    } else if (number === 17) {
      return "810px";
    } else if (number === 18) {
      return "900px";
    } else if (number === 19) {
      return "990px";
    } else return "1080px";
  };
  const style = {
    backgroundColor: lesson.color,
    right: getPosition(Number(lesson.startTime)),
    width: getWidth(Number(lesson.startTime), Number(lesson.endTime)),
  };

  return (
    <div className="task" style={style}>
      {lesson.name}
    </div>
  );
};

export default Schedule;
