import s from "./Switch.module.scss";

const Switch = (props) => {
  return (
    <div className={s.switch}>
      <div className={s.switchButtons}>
        <div
          style={
            props.gender
              ? { borderBottom: "1px solid #333333", color: "#333333" }
              : null
          }
          className={s.switchButton}
          onClick={() => {
            props.setGender(true);
          }}
        >
          Для него
        </div>
        <div className={s.def}>|</div>
        <div
          style={
            props.gender
              ? null
              : { borderBottom: "1px solid #333333", color: "#333333" }
          }
          className={s.switchButton}
          onClick={() => {
            props.setGender(false);
          }}
        >
          Для неё
        </div>
      </div>
    </div>
  );
};

export default Switch;
