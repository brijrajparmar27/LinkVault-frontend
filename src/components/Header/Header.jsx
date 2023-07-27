import "./Header.css";
import useAuthContext from "../../Hooks/ContextHooks/useAuthContext";
import { BsViewList, BsPlusLg, BsGridFill } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import { Box, Center, Drawer, Group, SegmentedControl } from "@mantine/core";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setIsList, setLinkModalState, isList }) => {
  const { logout } = useAuthContext();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="home_header">
      <AiOutlineMenu onClick={open} className="view_switcher" />
      <Drawer opened={opened} onClose={close} title="Menu" size={"xs"}>
        <div className="switch_contain">
          <SegmentedControl
            value={isList ? "List" : "Grid"}
            onChange={(value) => {
              setIsList(value === "List" ? true : false);
            }}
            size="lg"
            data={[
              {
                label: (
                  <div className="switcher_toogle">
                    <BsViewList className="view_switcher" /> <p>List</p>
                  </div>
                ),
                value: "List",
              },
              {
                label: (
                  <div className="switcher_toogle">
                    <BsGridFill className="view_switcher" /> <p>Grid</p>
                  </div>
                ),
                value: "Grid",
              },
            ]}
          />
        </div>
        <button className="logout_btn" onClick={logout}>
          Logout
        </button>
      </Drawer>
      <h1>LinkVault</h1>
      <div className="menus">
        <button
          className="addLink_btn"
          onClick={() => {
            setLinkModalState(true);
          }}
        >
          <BsPlusLg />
          Add Link
        </button>
      </div>
    </div>
  );
};
export default Header;
