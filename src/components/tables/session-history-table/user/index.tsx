import { useMemo } from "react";
import { BaseTable } from "../../base-table";
import { columns, IUserSessionHistory } from "./columns";
import data from "./data.json";

const SessionHistoryTable = () => {
    const userSessionHistoryData = useMemo<IUserSessionHistory[]>(() => JSON.parse(JSON.stringify(data)), []);

    return <BaseTable columns={columns} data={userSessionHistoryData} />;
};

export default SessionHistoryTable;
