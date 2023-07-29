import "./Header.css";
import { BsPlusLg } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import { AiOutlineMenu } from "react-icons/ai";
import { DrawerMenu } from "../Drawer/DrawerMenu";

const Header = ({ setIsList, setLinkModalState, isList }) => {
  const [opened, { open, close }] = useDisclosure(false);
  let props = {
    open,
    close,
    opened,
    setIsList,
    isList,
  };
  return (
    <div className="home_header">
      <AiOutlineMenu onClick={open} className="view_switcher" />
      <DrawerMenu {...props} />
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
