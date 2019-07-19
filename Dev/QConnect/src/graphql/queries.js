// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTeacher = `query GetTeacher($id: String!) {
  getTeacher(id: $id) {
    id
    name
    phoneNumber
    emailAddress
    profileImageId
    curentClassId {
      id
      teacher {
        id
        name
        phoneNumber
        emailAddress
        profileImageId
      }
      class {
        id
        name
        imageId
      }
    }
    classes {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listTeachers = `query ListTeachers(
  $id: String
  $filter: ModelTeacherFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeachers(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      phoneNumber
      emailAddress
      profileImageId
      curentClassId {
        id
      }
      classes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getClass = `query GetClass($id: String!) {
  getClass(id: $id) {
    id
    name
    imageId
    students {
      items {
        id
        grade
        totalAssignments
      }
      nextToken
    }
    teachers {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listClasss = `query ListClasss(
  $id: String
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasss(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      imageId
      students {
        nextToken
      }
      teachers {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getStudent = `query GetStudent($id: String!) {
  getStudent(id: $id) {
    id
    name
    imageId
    classes {
      items {
        id
        grade
        totalAssignments
      }
      nextToken
    }
  }
}
`;
export const listStudents = `query ListStudents(
  $id: String
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      imageId
      classes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAttendance = `query GetAttendance($id: String!) {
  getAttendance(id: $id) {
    id
    classStudent {
      id
      class {
        id
        name
        imageId
      }
      student {
        id
        name
        imageId
      }
      currentAssignments {
        nextToken
      }
      pastAssignments {
        nextToken
      }
      Attendance {
        nextToken
      }
      grade
      totalAssignments
    }
    date
    isPresent
  }
}
`;
export const listAttendances = `query ListAttendances(
  $id: String
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendances(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      classStudent {
        id
        grade
        totalAssignments
      }
      date
      isPresent
    }
    nextToken
  }
}
`;
export const getAssignment = `query GetAssignment($id: String!) {
  getAssignment(id: $id) {
    id
    name
    startDate
    classStudent {
      id
      class {
        id
        name
        imageId
      }
      student {
        id
        name
        imageId
      }
      currentAssignments {
        nextToken
      }
      pastAssignments {
        nextToken
      }
      Attendance {
        nextToken
      }
      grade
      totalAssignments
    }
    completionDate
    evaluation {
      grade
      notes
      improvements
    }
  }
}
`;
export const listAssignments = `query ListAssignments(
  $id: String
  $filter: ModelAssignmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssignments(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      startDate
      classStudent {
        id
        grade
        totalAssignments
      }
      completionDate
      evaluation {
        grade
        notes
        improvements
      }
    }
    nextToken
  }
}
`;
export const getEvaluation = `query GetEvaluation($id: ID!) {
  getEvaluation(id: $id) {
    grade
    notes
    improvements
  }
}
`;
export const listEvaluations = `query ListEvaluations(
  $filter: ModelEvaluationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvaluations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      grade
      notes
      improvements
    }
    nextToken
  }
}
`;
