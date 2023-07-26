import useAuthContext from "../../Hooks/ContextHooks/useAuthContext";
import { BsViewList, BsPlusLg, BsGridFill } from "react-icons/bs";

const Header = ({ setIsList, setLinkModalState, isList }) => {
  const { logout } = useAuthContext();
  return (
    <div className="home_header">
      <h1 onClick={logout}>LinkVault</h1>
      <div className="menus">
        <div
          className="switcher_contain"
          onClick={() => {
            setIsList((prev) => !prev);
          }}
        >
          {isList ? (
            <BsViewList className="view_switcher" />
          ) : (
            <BsGridFill className="view_switcher" />
          )}
        </div>
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
