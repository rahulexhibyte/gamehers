import {
  CSidebar,
  CSidebarNav,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

const SideBar = () => {
  return (
    <>
      <CSidebar show="responsive">
        <CSidebarNav>
          <CSidebarNavDropdown name="Manage GameHers Tools">
            <CSidebarNavItem
              name="Avatar Images"
              to="/dashboard/avatar"
            ></CSidebarNavItem>
            <CSidebarNavItem
              name="Games"
              to="/dashboard/games"
            ></CSidebarNavItem>
            <CSidebarNavItem
              name="Gaming Interests"
              to="/dashboard/gaminginterest"
            ></CSidebarNavItem>
            <CSidebarNavItem
              name="Other Interests"
              to="/dashboard/otherinterest"
            ></CSidebarNavItem>
            <CSidebarNavItem
              name="Favorite Platforms"
              to="/dashboard/platforms"
            ></CSidebarNavItem>
            <CSidebarNavItem
              name="Favorite Genres"
              to="/dashboard/genres"
            ></CSidebarNavItem>
            <CSidebarNavItem
              name="Virtual Gifts"
              to="/dashboard/virtualgifts"
            ></CSidebarNavItem>
          </CSidebarNavDropdown>
        </CSidebarNav>
      </CSidebar>
    </>
  );
};

export default SideBar;
