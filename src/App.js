import Notification from "./Notification";
import React from "react";
import "./styles.css";
import { useNotification } from "./NotificationProvider";

export default function App() {
  const { open } = useNotification();
  const notificationHandler = () => {
    open({ title: "Success" });
  };
  return (
    <div className="App">
      <button onClick={notificationHandler}>Notify me</button>
      {/* {notifications.map((notif) => {
        return <Notification key={notif.key} {...notif} />;
      })} */}
    </div>
  );
}
