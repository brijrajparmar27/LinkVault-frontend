import GridCard from "../GridCard/GridCard";
import ListCard from "../ListCard/ListCard";

export const CardSwitcher = ({ isList, each }) => {
  return (
    <a href={each.url}>
      {isList ? <ListCard each={each} /> : <GridCard each={each} />}
    </a>
  );
};
