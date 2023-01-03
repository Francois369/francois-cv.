import { Fragment } from "react";
import Card from "../components/ui/Card/Card";
import Badge from "../components/ui/Badge/Badge";
import classes from "../custom/custom.module.css";
import styles from "./references.module.css";
import { FaReact } from "react-icons/fa";

const References = () => {
  const refList = [
    {
      Name: "Zinhle Dlamuka",
      Company: "FSCA",
      Position: "HRSIS",
      tel: "+27 66 248 3357",
    },
    {
      Name: "Bellina Sebesho",
      Company: "FSCA",
      Position: "Head of Department Financial Management",
      tel: "+27 73 660 0961",
    },
    {
      Name: "Andrew Brooks",
      Company: "XFour Solutions",
      Position: "Project Manager ",
      tel: "+27 83 455 6280",
    },
    {
      Name: "Jaco Smit",
      Company: "XFour Solutions",
      Position: "Director ",
      tel: "+27 84 585 5509",
    },
    {
      Name: "Shaun O'Reilly",
      Company: "XFour Solutions",
      Position: "Director ",
      tel: "+27 82 56 54 284",
    },
    {
      Name: "Johan van Aswegen",
      Company: "Imperial Logistics",
      Position: "Operations Executive ",
      tel: "+27 83 449 6590",
    },
  ];

  // •	Dr Peter Kilbourn > University of Johannesburg - Senior Lecturer  >  See attached reference letter

  const renderList = refList.map(buildRefrenceitem);

  function buildRefrenceitem(item) {
    return (
      <div key={Math.random()}>
        <p className={classes["my-paragraph"]}>
          <strong>
            <i>
              <FaReact className={styles["reference-icon"]} />
              {" " + item.Name}
            </i>
          </strong>
          <br />
          <strong>&emsp; {item.Company}</strong>
          <br />
          <i>&emsp;{item.Position}</i>
          <br />
          &emsp;{item.tel}
        </p>
        <br />
      </div>
    );
  }

  return (
    <Fragment>
      <Badge>References</Badge>
      <Card>{renderList}</Card>
    </Fragment>
  );
};

export default References;
