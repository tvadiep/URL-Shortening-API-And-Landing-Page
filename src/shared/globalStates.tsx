import React from "react";
import { atom, selector } from "recoil";

export const submitted = atom({
  key: "submitted",
  default: false,
});

export const toggleSubmittion = selector({
  key: "ToggleSubmittion",
  set: ({ get, set }) => {
    const currentState = get(submitted);
    set(submitted, !currentState);
  },
});

// export const darkModeState = atom({
//   key: "darkModeState",
//   default: false,
// });

// export const toggleDarkMode = selector({
//   key: "darkModeToggle",
//   set: ({ get, set }) => {
//     const currentState = get(darkModeState);
//     set(darkModeState, !currentState);
//   },
// });
