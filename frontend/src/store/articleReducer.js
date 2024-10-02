

const LOAD_ARTICLES = 'article/loadArticles';
export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};
export const fetchArticles = () => async dispatch => {
  const response = await fetch('/api/articles');
  const articles = await response.json();//conver the reponse to readable formate.
  dispatch(loadArticles(articles));
}

const ADD_ARTICLE = 'article/addArticle';
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
