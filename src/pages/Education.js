import { Fragment } from "react";
import classes from "../custom/custom.module.css";
import Badge from "../components/ui/Badge/Badge";
function Education() {
  return (
    <Fragment>
      <Badge>Education</Badge>
      <div className="card">
        <div className="card-body bg-secondary">
          <p className="card-title text-white">Personal</p>
          <p className="card-text text-white">
            This is a generic test Paragrap to test layouts. I am a 34 year Old
            male with brown hair 5'11. I love development and truly enjoy it.
            Through multiple roles in the field however I have found I truly
            enjoy the problem solving nature of it. I realised what me appart is
            my abality knowledge and abality for business proscesses. I am not
            sure if it is brought on by varied nature of previous work
            experience or perhaps through my business qualifications.
          </p>

          <p className="card-title text-white">Career overview</p>
          <p className="card-text text-white">
            This is a generic test Paragrap to test layouts. I am a 34 year Old
            male with brown hair 5'11. I love development and truly enjoy it.
            Through multiple roles in the field however I have found I truly
            enjoy the problem solving nature of it. I realised what me appart is
            my abality knowledge and abality for business proscesses. I am not
            sure if it is brought on by varied nature of previous work
            experience or perhaps through my business qualifications.
          </p>

          <p className="card-title text-white">Objective</p>
          <p className="card-text text-white">
            This is a generic test Paragrap to test layouts. I am a 34 year Old
            male with brown hair 5'11. I love development and truly enjoy it.
            Through multiple roles in the field however I have found I truly
            enjoy the problem solving nature of it. I realised what me appart is
            my abality knowledge and abality for business proscesses. I am not
            sure if it is brought on by varied nature of previous work
            experience or perhaps through my business qualifications.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Education;
