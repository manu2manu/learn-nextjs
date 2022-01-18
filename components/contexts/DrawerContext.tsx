import { createContext, useState } from "react";
import { BaseProps } from "../../types";

interface IThemeContext {
  isOpen: boolean;
  onChange: () => void;
}

export const DrawerContextProvider = createContext<IThemeContext>({isOpen: false, onChange: () => console.log('test')});

export const DrawerContext = ({ children }: BaseProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChange = () => setIsOpen(!isOpen);

  return (
    <DrawerContextProvider.Provider
      value={{
        isOpen,
        onChange,
      }}
    >
      {children}
    </DrawerContextProvider.Provider>
  );
};
