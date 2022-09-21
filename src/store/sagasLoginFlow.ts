
import * as Effects from "redux-saga/effects";
import {LOGIN_REQUEST} from "./actions";
import * as userApi from '../api/user'
const take: any = Effects.take;
const call: any = Effects.call;

function* authorize(username, password) {

  try {
    yield call()
  } catch (e) {

  }

}

export function* loginFlowSaga( ) {
  //TODO
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST)

    const token = yield call(authorize, payload.username, payload.password)
  }
}
