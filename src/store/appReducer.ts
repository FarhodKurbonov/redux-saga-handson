import {USER_POSTS_FETCH_SUCCEEDED} from "./actions";

export const appReducer = (state = {posts: null,}, action: any) => {
  switch (action.type) {
    case USER_POSTS_FETCH_SUCCEEDED: {
      const posts = action.payload.data
      return {
        ... state,
        posts
      }
    }
    default:{
      return state
    }
  }
}
