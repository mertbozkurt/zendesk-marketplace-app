import React from "react";
import "./App.css";
import zafClient from "@app/zendesk/sdk";
import { EkranReportfull } from "./screens/EkranReportfull";

function App() {
  const [assignee, setAssignee] = React.useState("");

  const setTicketAssignee = async () => {
    const { ticket } = await zafClient.get("ticket");

  };

  React.useEffect(() => {
    zafClient.invoke("resize", { width: "100%", height: "700px" });
    setTicketAssignee
  }, []);

  return (
    <EkranReportfull />
  );
}

export default App;
