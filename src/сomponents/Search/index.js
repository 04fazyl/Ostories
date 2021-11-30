import s from "./Search.module.scss";

const Search = (props) => {
  return (
    <div style={{ top: `${props.top}` }} className={s.wrapper}>
      <div className={s.inputBlock}>
        <input
          onChange={props.onChangeSearchInput}
          value={props.searchValue}
          placeholder="Поиск ..."
        />
        <div onClick={props.onSearch} className={s.close}>
          <img src="./static/icons/close.svg" />
        </div>
      </div>
    </div>
  );
};

export default Search;
