import useScreenContext from "../Hooks/useScreenContext";

export const trimText = ({ string, lines, component }) => {
  const { isMobile } = useScreenContext();

  const MOBILE_ONELINE_GRID = 20;
  const MOBILE_ONELINE_LIST = 20;

  const MOBILE_TWOLINE_GRID = 38;
  const MOBILE_TWOLINE_LIST = 50;

  const DESKTOP_ONELINE_GRID = 28;
  const DESKTOP_ONELINE_LIST = 40;

  const DESKTOP_TWOLINE_GRID = 57;
  const DESKTOP_TWOLINE_LIST = 85;

  string = string.replace(/^(https?:\/\/(www\.)?)/, "");

  const getOffset = (lines) => {
    if (isMobile) {
      if (lines === 1) {
        return component === "GRID" ? MOBILE_ONELINE_GRID : MOBILE_ONELINE_LIST;
      } else {
        return component === "GRID" ? MOBILE_TWOLINE_GRID : MOBILE_TWOLINE_LIST;
      }
    } else {
      if (lines === 1) {
        return component === "GRID"
          ? DESKTOP_ONELINE_GRID
          : DESKTOP_ONELINE_LIST;
      } else {
        return component === "GRID"
          ? DESKTOP_TWOLINE_GRID
          : DESKTOP_TWOLINE_LIST;
      }
    }
  };

  let processedText = string.substr(0, getOffset(lines)).trim();
  if (string.length > getOffset(lines)) {
    processedText += "...";
  }
  //   lines==1 && console.log(string.length, " reduced to ", processedText.length, " for ", lines, " lines");
  return processedText;
};
