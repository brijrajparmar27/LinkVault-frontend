import { SegmentedControl } from "@mantine/core";
import { BsViewList, BsGridFill } from "react-icons/bs";

export const Switch = ({ isList, setIsList, close }) => {
//   const controls = [
//     {
//       title: "List",
//       icon: <BsViewList className="view_switcher" />,
//     },
//     {
//       title: "Grid",
//       icon: <BsGridFill className="view_switcher" />,
//     },
//   ];
//   const composeSwitchItems = () => {
//     // let items = [];
//     let items = controls.map((each) => {
//       console.log(each);
//       return {
//         label: (
//           <div className="switcher_toogle">
//             {each.icon}
//             {each.title}
//           </div>
//         ),
//         value: each.title,
//       };
//     });
//     console.log(items);
//   };
//   composeSwitchItems();
  const handleSwitchToogle = (value) => {
    setIsList(value === "List" ? true : false);
    setTimeout(() => {
      close();
    }, 400);
  };
  return (
    <SegmentedControl
      value={isList ? "List" : "Grid"}
      onChange={handleSwitchToogle}
      size="lg"
      data={
            [
            {
              label: (
                <div className="switcher_toogle">
                  <BsViewList className="view_switcher" />
                  <p>List</p>
                </div>
              ),
              value: "List",
            },
            {
              label: (
                <div className="switcher_toogle">
                  <BsGridFill className="view_switcher" />
                  <p>Grid</p>
                </div>
              ),
              value: "Grid",
            },
          ]
        // composeSwitchItems()
      }
    />
  );
};
