import byuiCourse from "./course.mjs";
import { setSectionSelection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

// Enroll a student
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);

  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
});

// Drop a student
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);

  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});

// Initial page setup
setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);