import { moveNext, movePreview } from "./carousel.actions";
import CarouselActionTypes from "./carousel.types";

const INITIAL_STATE = {
  itemClassName: "carousel__photo",
  items: document.getElementsByClassName("carousel__photo"),
  totalItems: 4,
  slide: 0,
  moving: true
};

const carouselReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CarouselActionTypes.MOVE_NEXT:
      return { ...state, slide: moveNext(state.slide, action.payload)}; 
    case CarouselActionTypes.MOVE_PREVIEW:
      return { ...state, slide: movePreview(state.slide, action.payload)}; 
    default:
      return state;
  }
}

export default carouselReducer;