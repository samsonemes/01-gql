const { courses } = require("../data");

function getCourse(args) {
  const { id } = args;

  return courses.filter((course) => course.id === id)[0];
}

function getCourses(args) {
  const { topic } = args;

  if (topic) {
    return courses.filter((course) => course.topic === topic);
  } else {
    return courses;
  }
}

module.exports = {
  course: getCourse,
  courses: getCourses,
};
