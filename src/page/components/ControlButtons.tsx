import React, { useEffect } from "react";
import { useGrid, useUpdateGrid } from "../contexts/MyGridContext";

export const ControlButtons: React.FC = () => {
  const setState = useUpdateGrid();

  const state = useGrid();

  useEffect(() => {
    console.log(`currentRow: ${state.currentRow}`);
  }, [state]);

  const toFirst = () =>
    setState((prev) => {
      return {
        ...prev,
        currentRow: 0,
      };
    });

  const toPrevious = () =>
    setState((prev) => {
      if ((prev.currentRow ?? 0) <= 0) {
        return {
            ...prev,
            currentRow: 0
        };
      }
      return {
        ...prev,
        currentRow: prev.currentRow! - 1,
      };
    });

  const toNext = () =>
    setState((prev) => {
      if ((prev.currentRow ?? 0) === (prev.totalRows ?? 1) - 1) {
        return prev;
      }
      return {
        ...prev,
        currentRow: prev.currentRow! + 1,
      };
    });

  const toLast = () =>
    setState((prev) => {
      if (!prev.totalRows) {
        return prev;
      }
      return {
        ...prev,
        currentRow: prev.totalRows! - 1,
      };
    });

  return (
    <>
      <button onClick={toFirst}>First</button>
      <button onClick={toPrevious}>Previous</button>
      <button onClick={toNext}>Next</button>
      <button onClick={toLast}>Last</button>
    </>
  );
};
