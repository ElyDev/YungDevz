import actionTypes from './actionTypes';
// imports from Amplify library
import config from '../../../aws-exports'
import { API, graphqlOperation } from 'aws-amplify'
// import the query
import { updateTeacher, updateTeacherNoClass } from 'graphql/mutations'

API.configure(config)

export function saveTeacherInfo(teacherInfo) {
  return async (dispatch) => {
    console.log("calling.. " + JSON.stringify(teacherInfo));
    dispatch(saveTeacherInfoToDb(teacherInfo))
    //if the teacher has classes already, we will update the classes info as well, otherwise, we will just update profile info
    let operation = teacherInfo.currentClassId? updateTeacher : updateTeacherNoClass;
    try {
      await API.graphql(graphqlOperation(updateTeacherNoClass, {
        input: teacherInfo
      }))
      console.log('teacher info saved in the service.')
    } catch (err) {
      console.log('error adding teacher...', err)
    }
  }
}


export const saveTeacherInfoToDb = (teacherInfo) => (
    {
      type: actionTypes.SAVE_TEACHER_INFO,
      teacherInfo
    }
);