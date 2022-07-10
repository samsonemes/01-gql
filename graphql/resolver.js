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

function addCourse(args) {
  const newCourse = {
    id: courses.length + 1,
    ...args,
  };

  courses.push(newCourse);

  return newCourse;
}

function updateCourse(args) {
  const { id, ...updateCourse } = args;

  const course = courses.find((course) => course.id === id);

  if (!course) {
    throw new Error(`Course with id ${id} not found!`);
  }

  const updatedCourse = {
    ...course,
    ...updateCourse,
  };

  courses.splice(courses.indexOf(course), 1, updatedCourse);

  return updatedCourse;
}

module.exports = {
  course: getCourse,
  addCourse: addCourse,
  updateCourse: updateCourse,
  courses: getCourses,
};
