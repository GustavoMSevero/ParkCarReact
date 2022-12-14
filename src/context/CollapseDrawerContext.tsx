import { createContext, useState, useEffect } from "react";
// hooks
import useResponsive from "../hooks/useResponsive";

// ----------------------------------------------------------------------

const initialState = {
  collapseClick: false,
  collapseHover: false,
  onToggleCollapse: () => {},
  onHoverEnter: () => {},
  onHoverLeave: () => {},
};

interface CollapseDrawerProps {
  isCollapse: any;
  collapseClick: any;
  collapseHover: any;
  onToggleCollapse: any;
  onHoverEnter: any;
  onHoverLeave: any;
}

export const CollapseDrawerContext = createContext(
  initialState as CollapseDrawerProps
);

// ----------------------------------------------------------------------

export const CollapseDrawerProvider = ({ children }: any) => {
  const isDesktop = useResponsive("up", "lg");

  const [collapse, setCollapse] = useState({
    click: false,
    hover: false,
  });

  useEffect(() => {
    if (!isDesktop) {
      setCollapse({
        click: false,
        hover: false,
      });
    }
  }, [isDesktop]);

  const handleToggleCollapse = () => {
    setCollapse({ ...collapse, click: !collapse.click });
  };

  const handleHoverEnter = () => {
    if (collapse.click) {
      setCollapse({ ...collapse, hover: true });
    }
  };

  const handleHoverLeave = () => {
    setCollapse({ ...collapse, hover: false });
  };

  return (
    <CollapseDrawerContext.Provider
      value={{
        isCollapse: collapse.click && !collapse.hover,
        collapseClick: collapse.click,
        collapseHover: collapse.hover,
        onToggleCollapse: handleToggleCollapse,
        onHoverEnter: handleHoverEnter,
        onHoverLeave: handleHoverLeave,
      }}
    >
      {children}
    </CollapseDrawerContext.Provider>
  );
};
