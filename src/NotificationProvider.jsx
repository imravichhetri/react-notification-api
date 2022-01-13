import React, { useContext } from "react";
import Notification from "./Notification";

const NotificationContext = React.createContext(() => {});

const NotificationWrapper = ({ children }) => {
  const [notifications, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        return [{ ...action.payload }, ...state];
      case "REMOVE":
        return state.filter((notif) => action.id !== notif.id);
      default:
        return state;
    }
  }, []);
  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notification-container">
        {notifications.map((notif) => (
          <Notification dispatch={dispatch} key={notif.id} {...notif} />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};
const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return {
    open: ({ title = "Added successfuly" }) =>
      dispatch({
        type: "ADD",
        payload: {
          title,
          id: new Date().getTime()
        }
      }),
    destroy: ({ id }) =>
      dispatch({
        type: "REMOVE",
        id
      })
  };
};
export { useNotification };
export default NotificationWrapper;
