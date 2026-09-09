import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./../redux/store";
import { setStep } from "./../redux/actions";
import ProfileForm from "./ProfileForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import ProjectsForm from "./ProjectsForm";
import SocialForm from "./SocialForm";
import ResumeOutput from "./ResumeOutput";
import './../styles/App.css';

const STEPS = [
  { label: "Profile Section", Component: ProfileForm },
  { label: "Education Section", Component: EducationForm },
  { label: "Skills Sector", Component: SkillsForm },
  { label: "Mini Project", Component: ProjectsForm },
  { label: "Social", Component: SocialForm },
];

const ResumeBuilder = () => {
  const step = useSelector((state) => state.step);
  const isFinished = useSelector((state) => state.isFinished);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(setStep(step + 1));
  };

  const handleBack = () => {
    if (step > 0) dispatch(setStep(step - 1));
  };

  const handleSaveContinue = () => {
    dispatch(setStep(step + 1));
  };

  if (isFinished) {
    return <ResumeOutput />;
  }

  const CurrentSection = STEPS[step].Component;

  return (
    <div className="App">
      <h1>Resume Generator</h1>
      <div className="stepper">
        {STEPS.map((s, idx) => (
          <span
            key={s.label}
            className={`step-label${idx === step ? " active" : ""}`}
          >
            {s.label}
          </span>
        ))}
      </div>

      <CurrentSection />

      <div className="nav-buttons">
        <button id="back" className="button" onClick={handleBack} disabled={step === 0}>
          BACK
        </button>
        <button id="next" className="button" onClick={handleNext}>
          NEXT
        </button>
        <button id="save_continue" className="button" onClick={handleSaveContinue}>
          SAVE AND CONTINUE
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ResumeBuilder />
    </Provider>
  );
};

export default App;
