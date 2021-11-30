import s from "./Item.module.scss";

const Item = (props) => {
  return (
    <div className={s.item}>
      <img src={`./static/prev/${props.image}.jpg`} alt="prevImages" />
    </div>
  );
};

export default Item;
