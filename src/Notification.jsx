import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./notice.scss";

const createContainer = () => {
  const portalDivId = "portal-id";
  const portalDiv = document.getElementById("portal-div");

  if (portalDiv) {
    return portalDiv;
  }
  const container = document.getElementById("root");
  const div = document.createElement("div");
  div.setAttribute("id", portalDivId);
  container.appendChild(div);
  return div;
};

const Notice = ({
  title = "Notification",
  description,
  dispatch,
  id,
  ...rest
}) => {
  useEffect(() => {
    setTimeout(() => {
      // dispatch({ type: "REMOVE", id });
    }, 3000);
  }, []);
  return (
    <div className="notice-container">
      <div>{title + "_" + id}</div>
      <span
        className="close-button"
        onClick={() => {
          dispatch({ type: "REMOVE", id });
        }}
      >
        X
      </span>
      <div>{description}</div>
      <div className="progressbar-container"></div>
    </div>
  );
};

const Notify = (props) => {
  const container = createContainer();
  createPortal(<Notice {...props} />, container);
  // };
  // return {
  //   destroy
  // };
};
// export default {
//   open: Notify
// };
export default Notice;
