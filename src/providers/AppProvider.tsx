import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <BrowserRouter>{children}</BrowserRouter>
    </ErrorBoundary>
  );
};

export default AppProvider;
