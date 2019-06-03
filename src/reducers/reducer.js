const initPosts = {
  posts: [],
  post: {}
};

function postsReducer(state = initPosts, action) {
  switch (action.type) {
    case 'ADD_POST':
      return { ...state, post: action.params };
    case 'REMOVE_POST':
      const newPosts = state.posts.filter(post => {
        return post.id !== action.id;
      });
      return { ...state, posts: newPosts };
    case 'LOAD_POSTS':
      return { ...state, posts: action.posts };
    case 'EDIT_POST':
      let posts = Object.values({ ...state.posts });

      posts.map(post => {
        if (post.id === action.post.id) {
          post.name = action.post.name;
          post.description = action.post.description;
        }
      });

      return { ...state, posts: posts };
    case 'SHOW_POST':
      return { ...state, post: action.post };
    default:
      break;
  }

  return state;
}

export default postsReducer;
