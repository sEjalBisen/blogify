import {SELECT_CATEGORY} from '../actions/blogActions'

const initialCategoryState = {
  selectedCategory: '',
}

const blogCategoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      }
    default:
      return state
  }
}

export default blogCategoryReducer
