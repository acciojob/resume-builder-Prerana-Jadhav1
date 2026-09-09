import {
  SET_PROFILE,
  ADD_EDUCATION,
  DELETE_EDUCATION,
  ADD_SKILL,
  DELETE_SKILL,
  ADD_PROJECT,
  DELETE_PROJECT,
  ADD_SOCIAL,
  DELETE_SOCIAL,
  SET_STEP,
  RESET_RESUME,
} from "./actions";

export const initialState = {
  step: 0,
  isFinished: false,
  profile: { fname: "", lname: "", phone: "", address: "", url: "" },
  education: [],
  skills: [],
  projects: [],
  social: [],
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: { ...state.profile, ...action.payload } };
    case ADD_EDUCATION:
      return { ...state, education: [...state.education, action.payload] };
    case DELETE_EDUCATION:
      return {
        ...state,
        education: state.education.filter((_, i) => i !== action.payload),
      };
    case ADD_SKILL:
      return { ...state, skills: [...state.skills, action.payload] };
    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((_, i) => i !== action.payload),
      };
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((_, i) => i !== action.payload),
      };
    case ADD_SOCIAL:
      return { ...state, social: [...state.social, action.payload] };
    case DELETE_SOCIAL:
      return {
        ...state,
        social: state.social.filter((_, i) => i !== action.payload),
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
        isFinished: action.payload > 4,
      };
    case RESET_RESUME:
      return { ...initialState };
    default:
      return state;
  }
};

export default resumeReducer;
