import { QueryProvider } from "./query/provider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
