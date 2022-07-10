const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }

    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    }

    type Mutation {
        addCourse(title: String, author: String, description: String, topic: String, url: String): Course,
        updateCourse(id: Int!, title: String, author: String, description: String, topic: String, url: String): Course,
    } 
`);
