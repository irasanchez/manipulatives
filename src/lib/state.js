import { createContext } from "react";
import Lexer from "./lexer";
let start = 1;
export const initialForLoopState = {
    operators: ["++" /*"--"*/, "+= 2", "*= 2" /*"/= 2", "-= 2"*/],
    iterator: 0,
    start,
    end: 10,
    iterationCount: start,
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
        case "CHANGE_START":
            return {
                ...state,
                start: action.start,
                iterationCount: action.start,
            };
        case "CHANGE_END":
            return { ...state, end: action.end };
        case "CHANGE_ITERATOR":
            return { ...state, iterator: action.iterator };
        case "CHANGE_ITERATION_COUNT":
            console.log({ action });
            return { ...state, iterationCount: action.iterationCount };
        default:
            return state;
    }
}

export const ACTIONS = {
    CHANGE_THEME: "CHANGE_THEME",
    CHANGE_STEP: "CHANGE_STEP",
    CHANGE_HIGHLIGHT_SECTION_RANGES: "CHANGE_HIGHLIGHT_SECTION_RANGES",
    TOGGLE_ACTIVE_SECTION: "TOGGLE_ACTIVE_SECTION",
    CHANGE_START: "CHANGE_START",
    CHANGE_END: "CHANGE_END",
    CHANGE_ITERATOR: "CHANGE_ITERATOR",
    CHANGE_ITERATION_COUNT: "CHANGE_ITERATION_COUNT",
};
