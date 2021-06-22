import SideBar from "../../components/sideBar";
import CurrentContent from "../currentContent";

const Dashboard = () => {
  return (
    <>
      <div className="c-app c-default-layout">
        <SideBar />
        <div className="c-wrapper">
          <div className="c-body">
            <CurrentContent />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Dashboard;
