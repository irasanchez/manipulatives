import { createContext, useReducer } from "react";
import Lexer from "./lexer";

export const initialForLoopState = {
    start: 0,
    end: 0,
    theme: "light",
    lex: new Lexer(
        "for ( let i = 0; i < 10; i++ ) { console.log(i); }"
    ).getLex(),
    step: 0,
    highlightSectionRanges: { keyWord: [1], expression: [2, 3, 4], block: [5] },
    sectionIsActive: (section, step) => {
        return this.highlightSectionRanges[section].includes(step);
    },
};

export const ForLoopContext = createContext();

export function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_THEME":
            return { ...state, theme: action.theme };
        case "CHANGE_STEP":
            return { ...state, step: action.step };
        case "CHANGE_HIGHLIGHT_SECTION_RANGES":
            return {
                ...state,
                highlightSectionRanges: action.highlightSectionRanges,
            };
        case "TOGGLE_ACTIVE_SECTION":
            return { ...state, sectionIsActive: action.sectionIsActive };
        default:
            return state;
    }
}

export const ACTIONS = {
    CHANGE_THEME: "CHANGE_THEME",
    CHANGE_STEP: "CHANGE_STEP",
    CHANGE_HIGHLIGHT_SECTION_RANGES: "CHANGE_HIGHLIGHT_SECTION_RANGES",
    TOGGLE_ACTIVE_SECTION: "TOGGLE_ACTIVE_SECTION",
};
