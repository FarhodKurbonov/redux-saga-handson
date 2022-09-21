import {USER_POSTS_FETCH_REQUESTED, USER_POSTS_FETCH_SUCCEEDED, USER_POSTS_FETCH_FAILED} from "./actions";
import * as Effects from "redux-saga/effects";
import {getUserPosts, User} from '../api/posts';
const call: any = Effects.call;
const put: any = Effects.put;
const take: any = Effects.take;
const actionChannel = Effects.actionChannel

function* fetchUserPosts(action: any): Generator<any > {
  try {
    const userPosts = yield call(getUserPosts, action.payload.userId)


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


export function* userPostsFetchRequestedWatcherSaga(): Generator<any> {
  const requestChannel = yield actionChannel(USER_POSTS_FETCH_REQUESTED)

  while (true) {
    const action = yield take(requestChannel);
    console.info('action', action);
    yield call(fetchUserPosts, action)
  }

}

