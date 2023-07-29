import useAuthContext from "../../Hooks/ContextHooks/useAuthContext";
import { Drawer } from "@mantine/core";
import { Switch } from "../Switch/Switch";

export const DrawerMenu = ({ close, opened, setIsList, isList }) => {
  const { logout } = useAuthContext();
  const switchProps = {
    isList,
    setIsList,
    close,
  };

  return (
    <Drawer opened={opened} onClose={close} title="Menu" size={"xs"}>
      <div className="switch_contain">
        <Switch {...switchProps} />
      </div>
      <button className="logout_btn" onClick={logout}>
        Logout
      </button>
    </Drawer>
  );
};
