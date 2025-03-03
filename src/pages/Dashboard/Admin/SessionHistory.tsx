import SessionHistoryTable from "@/components/tables/session-history-table/admin";

const SessionHistory = () => {
    return (
        <section className="py-3 grid gap-y-6">
            <h6>Session History</h6>
            <SessionHistoryTable />
        </section>
    );
};

export default SessionHistory;
