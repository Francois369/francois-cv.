import "../../custom/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <ul className="list-group">
      {props.data.map((item) => (
        <li
          id={item.Id}
          key={item.Id}
          onClick={liClickHandler}
          className="list-group-item text-white"
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
