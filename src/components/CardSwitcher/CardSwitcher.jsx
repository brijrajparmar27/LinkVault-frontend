import GridCard from "../GridCard/GridCard";
import ListCard from "../ListCard/ListCard";

export const CardSwitcher = ({ isList, each }) => {
  return <>{isList ? <ListCard each={each} /> : <GridCard each={each} />}</>;
};
