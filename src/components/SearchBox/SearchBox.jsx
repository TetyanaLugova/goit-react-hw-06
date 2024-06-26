import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { getSelectNameFilter, setStatusFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getSelectNameFilter);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setStatusFilter(value));
  };
  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.filter}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};
