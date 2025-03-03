import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure for the questions
interface Question {
  id: number;
  question: string;
  content: { contentId: number; plan?: string; role?: string }[];
}

// Define the state structure
interface AuthState {
  questions: Question[];
  topicQuestion: string;
  content: string; // New state property
  signupFlow: string,
}

const initialState: AuthState = {
  questions: [
    {
      id: 1,
      question: "What do you plan on doing?",
      content: [
        { contentId: 1, plan: "Pitch" },
        { contentId: 2, plan: "Present" },
        { contentId: 3, plan: "Speak" },
      ],
    },
    {
      id: 2,
      question: "What role are you?",
      content: [
        { contentId: 1, role: "Early Career Professional" },
        { contentId: 2, role: "Mid-level Professionals" },
        { contentId: 3, role: "Executives" },
        { contentId: 4, role: "C-suites" },
        { contentId: 5, role: "Athletes" },
        { contentId: 6, role: "Entrepreneurs" },
        { contentId: 7, role: "Sales Professionals" },
      ],
    },
  ],
  topicQuestion: "What do you plan on doing?", // Initial value for topicQuestion
  content: "", // Initial value for content
  signupFlow: "signup",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTopicQuestion: (state, action: PayloadAction<string>) => {
      state.topicQuestion = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setSignupFlow: (state, action: PayloadAction<string>) => {
      state.signupFlow = action.payload;
    },
  },
});

export const { setTopicQuestion, setContent, setSignupFlow } = authSlice.actions;
export default authSlice.reducer;