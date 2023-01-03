import { Fragment } from "react";
import Card from "../components/ui/Card/Card";
import Badge from "../components/ui/Badge/Badge";

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
  ];
  // •	Bellina Sebesho> FSCA> Head of Department Financial Management > +27 73 660 0961
  // •	Andrew Brooks> XFour - Project Manager  > +27 83 455 6280
  // •	Jaco Smit > XFour > Director > +27 84 585 5509
  // •	Shaun O Reilly > XFour > Director > +27 82 56 54 284
  // •	Johan van Aswegen > Imperial Logistics – Operations Executive > +27 83 449 6590
  // •	Dr Peter Kilbourn > University of Johannesburg - Senior Lecturer  >  See attached reference letter

  const renderList = refList.map(buildRefrenceitem);

  function buildRefrenceitem(item) {
    return (
      <div key={Math.random()}>
        <p>
          {item.Name}
          <br />
        </p>
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
