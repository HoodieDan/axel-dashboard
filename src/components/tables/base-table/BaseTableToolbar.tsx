import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { HTMLAttributes } from "react";
import BaseTableDatePicker from "./BaseTableDatePicker";
import BaseTableSelectFilters from "./BaseTableSelectFilters";
import BaseTableSortOptions from "./BaseTableSortOptions";

interface IBaseTableTolbarProps<TData> extends HTMLAttributes<HTMLDivElement> {
    table: Table<TData>;
}

const BaseTableToolbar = <TData,>({ table }: IBaseTableTolbarProps<TData>) => {
    return (
        <div className="grid gap-y-4">
            <div className="flex items-center justify-between">
                <div className="relative">
                    <div className="grid place-content-center absolute h-full w-8">
                        <Search className="size-4 text-primary-0" />
                    </div>
                    <Input
                        placeholder="Search session by name"
                        value={(table.getColumn("sessionName")?.getFilterValue() as string) ?? ""}
                        onChange={(e) => table.getColumn("sessionName")?.setFilterValue(e.target.value)}
                        className="min-w-xs text-primary-0 placeholder:text-primary-0/80 pl-8 border-light-silver focus-visible:border-none focus-visible:ring-1 focus-visible:ring-primatext-primary-0 transition duration-300"
                    />
                </div>
                <BaseTableSortOptions table={table} />
            </div>
            <div className="flex items-center gap-x-3">
                <BaseTableDatePicker table={table} />
                <BaseTableSelectFilters table={table} />
            </div>
        </div>
    );
};

export default BaseTableToolbar;
