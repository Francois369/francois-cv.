import React, { Fragment } from "react";
import Badge from "../components/ui/Badge/Badge";
import Card from "../components/ui/Card/Card";
import { FaReact } from "react-icons/fa";
import classes from "../custom/custom.module.css";
import styles from "./Attributes.module.css";
const Attributes = () => {
  return (
    <Fragment>
      <Badge>Attributes and Achievements</Badge>
      <Card>
        <p className={classes["my-paragraph"]}>
          <FaReact className={styles["attribute-icon"]} />
          <strong> Creative problem solver </strong> <br />
          Creative in problem solving and coming up with solutions. When I was
          at university my Logistics Honours class was made up 65 students.
          Among this crowd I was a middle of the road student and did not boast
          any sports cultural achievements nor was I member of any student
          bodies etc. There was a two-week exchange type concept sponsored by
          USAID. It was part of a larger project between the University of
          Michigan and the University of Johannesburg. There would be 2 students
          selected from this honors group two visit the university of Michigan
          for 2 weeks. I really wanted to go but didn`t think I had much of a
          chance to be selected from such an Elite group. One night sitting in
          the Library (I was supposed to be studying) inspiration struck. I
          realized that most of the people writing the motivational essay and
          going for the interview would spend all there time talking about how
          great they were as students or Leaders of student bodies etc. I
          decided I would say nothing about what qualifies me to go. I would
          simply write an essay which states how great this opportunity is and
          about why Michigan would be a very insightful place to visit from a
          logistics perspective. I ended up getting chosen until this day I am
          very proud of this and believe were it not for my out of the box
          thinking I would not have been selected.
        </p>
        <p className={classes["my-paragraph"]}>
          <FaReact className={styles["attribute-icon"]} />
          <strong> People skills</strong>
          <br /> I have an ability to garner trust and respect through honesty
          fairness and respectfulness. When managing my first contract at
          Imperial I ran a tight ship. I enforced some things on principal which
          I retrospectively sometimes feel might have been harsh. When there was
          a violent union strike action employees would come to work and then
          hope that they could sit in the yard and still get paid. Most if not
          all other managers allowed this and the company incurred the cost. I
          explained to my team that as much as I fear for their safety that it
          is the union which they are members of which is engaged in strike
          action and not the company. If they come to work, they must be willing
          to drive or stay at home and unfortunately not get paid. Despite this
          harshness I was deemed fair by my team. Upon my departure at the
          handover meeting to the new manager the team pleaded with the new
          manager to treat them with the same fairness and compassion that I
          had.
        </p>
        <p className={classes["my-paragraph"]}>
          <FaReact className={styles["attribute-icon"]} />
          <strong> Determination</strong>
          <br />
          The project which we worked on for the FSCA was a trying one at the
          best of times. During the last stretch where I played a central role,
          there was a feeling of gloom around the meetings, and many were not
          expecting the project to be completed in time. As we started achieving
          successes, I would often be praised for my hand in that. I would then
          respond with the fact that the employees of client(FSCA) really are
          getting sold short by some of this praise as they themselves had gone
          to great lenghts to support my efforts. Later, after the project when
          already working for FSCA myself, I asked why had the team gotten
          behind me and supported me so much. The response I got was along the
          following lines. “Many people had given up including the contractors
          on the project when I came along. I arrived and was not willing to
          give up. No matter what setbacks were uncovered, Each morning in the
          meetings I continued to come up with plans and solutions”.
        </p>
        <p className={classes["my-paragraph"]}>
          <FaReact className={styles["attribute-icon"]} />
          <strong> Good communicator</strong>
          <br />I am fairly well read and travelled and have worked in a
          unusually diverse settings (From working with heads of department at a
          Regulatory body to loading trucks and working as a mechanics assistant
          for a week). Completed IELTS tests for immigration purposes and my
          scores serve as further proof of this.
        </p>

        <p className={classes["my-paragraph"]}>
          <FaReact className={styles["attribute-icon"]} />
          <strong> Sense of Responsibility and Diligence </strong> <br />I
          believe my success in my career is driven by this more than anything
          else. It can be a double edge sword as taking on to much
          responsibility can be stressful. At the same time success has followed
          me in the periods where I took on larger responsibilities.
        </p>
      </Card>
    </Fragment>
  );
};
export default Attributes;
