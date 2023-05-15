import {
  useContext,
  createContext,
  ReactNode,
  useState,
} from "react";

interface IProp {
  children: ReactNode;
}

/**
 * Grid の状態インターフェース
 */
export interface IGridState {
  /**
   * 行数
   */
  totalRows?: number;

  /**
   * 選択行数
   */
  currentRow?: number;

//   /**
//    * 選択データの ID
//    */
//   currentId?: number;
}

const GridContext = createContext({} as IGridState);
const GridUpdateContext = createContext({} as React.Dispatch<React.SetStateAction<IGridState>>);

export const MyGridProvider: React.FC<IProp> = ({ children }) => {
  const [myGridState, setMyGridState] = useState<IGridState>({
    totalRows: 10,
    currentRow: 0
  });

  return (
    <GridContext.Provider value={myGridState}>
      <GridUpdateContext.Provider value={setMyGridState}>
        {children}
      </GridUpdateContext.Provider>
    </GridContext.Provider>
  );
};

/**
 * Grid の State を返す
 * @returns 
 */
export const useGrid = () => useContext(GridContext);

/**
 * Grid の setState を返す
 * @returns 
 */
export const useUpdateGrid = () => useContext(GridUpdateContext);
