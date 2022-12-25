import classes from "../../custom/custom.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

function ListItems(props) {
  const LisItemRef = useRef();
  var history = useHistory();
  function liClickHandler(event) {
    console.log(event.target.id);
    history.push(`/${event.target.id}`);
  }

  return (
    <ul className={classes["my-ul"]}>
      {props.data.map((item) => (
        <li
          className={classes["my-li"]}
          id={item.Id}
          key={item.Id}
          onClick={liClickHandler}
        >
          {item.Description}
        </li>
      ))}
    </ul>
  );

  // props.data.map((li) => {<ListGroup.Item>{li.Description}
  // </ListGroup.Item>)};
}

export default ListItems;
