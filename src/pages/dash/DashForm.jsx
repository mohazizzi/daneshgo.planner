import "./dash.css";
import { TiArrowBack } from "react-icons/ti";

const DashForm = ({
  error,
  formData,
  handleChange,
  onSubmit,
  buttonText,
  title,
  backToDashPage,
}) => {
  return (
    <form className="dash_form" onSubmit={onSubmit}>
      <button className="dash_form_back" onClick={backToDashPage}>
        <TiArrowBack />
      </button>
      <h4 className="dash_form_title section-title">{title}</h4>
      <input
        className="dash_form_input"
        type="text"
        placeholder="نام درس..."
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <select
        className="dash_form_section"
        name="day"
        value={formData.day}
        onChange={handleChange}
      >
        <option value="">روز هفته</option>
        <option value="شنبه">شنبه</option>
        <option value="یک شنبه">یک شنبه</option>
        <option value="دوشنبه">دوشنبه</option>
        <option value="سه شنبه">سه شنبه</option>
        <option value="چهارشنبه">چهارشنبه</option>
        <option value="پنج شنبه">پنجشنبه</option>
        <option value="جمعه">جمعه</option>
      </select>
      <select
        className="dash_form_section"
        name="startTime"
        value={formData.startTime}
        onChange={handleChange}
      >
        <option value="">ساعت شروع</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <select
        className="dash_form_section"
        name="endTime"
        value={formData.endTime}
        onChange={handleChange}
      >
        <option value="">ساعت پایان</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <select
        className="dash_form_section"
        name="color"
        value={formData.color}
        onChange={handleChange}
      >
        <option value="">رنگ</option>
        <option value="#52AD9C">آبی</option>
        <option value="#96C99C">سبز</option>
        <option value="#FFC857">زرد</option>
        <option value="#A6A6A8">خاکستری</option>
        <option value="#FF8484">قرمز</option>
        <option value="#AC92FA">بنفش</option>
        <option value="#F1935C">نارنجی</option>
        <option value="#F3DCAD">کرمی</option>
        <option value="#55829C">آبی تیره</option>
        <option value="#B0CAC7">سبز روشن</option>
        <option value="#D7C1E0">صورتی</option>
      </select>
      {error && <p className="form_error">لطفا تمامی فیلدها را پر کنید!</p>}
      <button className="add-new-btn">{buttonText}</button>
    </form>
  );
};

export default DashForm;
