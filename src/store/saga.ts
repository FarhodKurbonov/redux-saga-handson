import {USER_POSTS_FETCH_REQUESTED, USER_POSTS_FETCH_SUCCEEDED, USER_POSTS_FETCH_FAILED} from "./actions";
import {takeEvery, call, put, all} from 'redux-saga/effects'
import {getUserPosts, User} from '../api/posts';
import ts from "typescript/lib/tsserverlibrary";
import allFilesAreJsOrDts = ts.server.allFilesAreJsOrDts;

function* fetchUserPosts(action: any): Generator<any > {
  try {
    const callResult = call(getUserPosts, action.payload.userId)
    console.info(callResult)

      const userPosts = yield callResult

    yield put({
      type: USER_POSTS_FETCH_SUCCEEDED,
      payload: {
        data: userPosts
      }
    })
  } catch (e) {
    yield put({
      type: USER_POSTS_FETCH_FAILED,
      payload: (e as Error).message
    })
  }
}


export  function* UserPostsFetchRequestedWatcherSaga() {
    yield takeEvery(USER_POSTS_FETCH_REQUESTED, fetchUserPosts)
}

export  function* anotherSaga() {
    console.info('Another Saga')

}

export function* rootSaga () {
  yield all([ UserPostsFetchRequestedWatcherSaga(), anotherSaga()])
}



