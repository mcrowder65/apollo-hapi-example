const { createStore } = require("redux");
const shortid = require("shortid");
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const CREATE_POST = "CREATE_POST";

const updateList = (list, updatedElement) => {
  return list.map(element => {
    if (element.id === updatedElement.id) {
      return updatedElement;
    } else return element;
  });
};

const deleteIdFromList = (list, id) => {
  return list.filter(element => {
    if (element.id === id) {
      return false;
    } else {
      return true;
    }
  });
};
const addItemToList = (list, item) => {
  return [...list, item];
};
const reducers = (state, action) => {
  if (action.type === UPDATE_POST) {
    return {
      ...state,
      posts: updateList(state.posts, action.post)
    };
  } else if (action.type === DELETE_POST) {
    return {
      ...state,
      posts: deleteIdFromList(state.posts, action.id)
    };
  } else if (action.type === CREATE_POST) {
    return {
      ...state,
      posts: addItemToList(state.posts, action.post)
    };
  }
  return state;
};
const initialState = {
  posts: [
    {
      id: "bCgCE2YKG",
      title: "How to learn GraphQL",
      body: `If you want to learn GraphQL, then you should go to GraphQL.org! In there, you will find a lot of content and stuff, which will then teach you how to learn GraphQL!`
    },
    {
      id: "hLSAjhESu",
      title: "How to learn React",
      body: `If you want to learn React, then you should go to React.org! In there, you will find a lot of content and stuff, which will then teach you how to learn React!`
    }
  ]
};
const store = createStore(reducers, initialState);

const updatePost = post => {
  store.dispatch({
    type: UPDATE_POST,
    post
  });
};
const deletePost = id => {
  store.dispatch({
    type: DELETE_POST,
    id
  });
};

const createPost = ({ title, body }) => {
  store.dispatch({
    type: CREATE_POST,
    post: { title, body, id: shortid.generate() }
  });
};

const getPosts = () => {
  return store.getState().posts;
};
module.exports = {
  getPosts,
  updatePost,
  deletePost,
  createPost
};
