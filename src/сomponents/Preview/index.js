import Item from "./Item";
import s from "./Preview.module.scss";

const prevGallery = [
  {
    id: 1,
    alt: "Акции",
    image: "prev1",
  },
  {
    id: 2,
    alt: "Акции",
    image: "prev2",
  },
  {
    id: 3,
    alt: "Акции",
    image: "prev3",
  },
  {
    id: 4,
    alt: "Акции",
    image: "prev4",
  },
  {
    id: 5,
    alt: "Акции",
    image: "prev5",
  },
  {
    id: 6,
    alt: "Акции",
    image: "prev6",
  },
  {
    id: 7,
    alt: "Акции",
    image: "prev7",
  },
  {
    id: 8,
    alt: "Акции",
    image: "prev8",
  },
  {
    id: 9,
    alt: "Акции",
    image: "prev9",
  },
];

const Preview = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.track}>
        {prevGallery.map((el, index) => (
          <Item key={index} image={el.image} alt={el.alt} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Preview;
