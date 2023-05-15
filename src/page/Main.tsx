import React from "react";
import { MyGridProvider } from "./contexts/MyGridContext";
import { ControlButtons } from "./components/ControlButtons";

export const Main: React.FC = () => {
  return (
    <MyGridProvider>
      <ControlButtons />
    </MyGridProvider>
  );
};
