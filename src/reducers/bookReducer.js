const ACTIONS = {
  ADD_BOOK: "add-book",
  REMOVE_BOOK: "remove-book",
};
const bookReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BOOK:
      return [
        {
          title: action.book.title,
          author: action.book.author,
          id: Date.now(),
        },
        ...state,
      ];
    case ACTIONS.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
