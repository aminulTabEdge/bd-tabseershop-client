import ResponsiveNavbar from "@/components/layouts/Navbar/Navbar";
import { ChildrenType } from "@/types/types";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <ResponsiveNavbar />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
