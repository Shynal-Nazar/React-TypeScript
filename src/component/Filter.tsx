import { useAppDispatch, useAppSelector } from "../store/hook";
import { handleChangeFilter } from "../store/filterSplice";

const Filter: React.FC = () => {
  const value = useAppSelector((state) => state.filter.filter);
  const dispatch = useAppDispatch();
  return (
    <input
      className="filter"
      type="text"
      value={value}
      onChange={(evt) => dispatch(handleChangeFilter(evt.target.value))}
    />
  );
};

export default Filter;
