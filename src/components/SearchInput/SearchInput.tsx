import { Link } from "react-router-dom";
import styles from "./SearchInput.module.scss";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import {
  getComponents,
  getSearchValue,
} from "../../store/components/selectors";
import { findComponents } from "../../store/components/slice";
const SearchInput = () => {
  const dispatch = useAppDispatch();
  const components = useSelector(getComponents);
  const searchValue = useSelector(getSearchValue);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(findComponents(event.target.value));
  };
  return (
    <>
      <div className={styles.search__wrapper}>
        <input
          className={styles.header_input}
          placeholder="Search Components..."
          value={searchValue}
          onChange={handleInputChange}
        />
        {searchValue.length > 0 ? (
          <svg
            onClick={() => dispatch(findComponents(""))}
            style={{
              zIndex: 2,
              cursor: "pointer",
              width: "16px",
              height: "16px",
            }}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#8a8a8b"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
          </svg>
        ) : (
          <svg
            style={{ zIndex: 2 }}
            enableBackground="new 0 0 32 32"
            id="Editable-line"
            version="1.1"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="14"
              fill="none"
              id="XMLID_42_"
              r="9"
              stroke="#8a8a8b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></circle>
            <line
              fill="8a8a8b"
              id="XMLID_44_"
              stroke="#8a8a8b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              x1="27"
              x2="20.366"
              y1="27"
              y2="20.366"
            ></line>
          </svg>
        )}
      </div>
      {components.length > 0 && (
        <div className={styles.result_wrapper}>
          {components.map((component, index) => (
            <Link
              onClick={() => dispatch(findComponents(""))}
              key={index}
              to={component.link}
              className={styles.result_link}
            >
              {component.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchInput;
