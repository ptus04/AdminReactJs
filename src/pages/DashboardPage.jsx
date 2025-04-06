import { useState, useEffect } from "react";
import { AvatarWithName, Badge, OverviewCard, EditButton, SecondaryButton } from "../components";
import DataTable from "datatables.net-react";
import DataTablesCore from "datatables.net-dt";
import "datatables.net-responsive-dt";
import "datatables.net-select-dt";
import icons from "../icon-pack";

export default function DashboardPage() {
  DataTable.use(DataTablesCore);
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const doFetch = async () => {
      const url = "https://67ee8ffcc11d5ff4bf7a11b6.mockapi.io/overview";
      const res = await fetch(url, { signal });
      const data = await res.json();
      setOverview(data);
    };

    doFetch();

    return () => controller.abort();
  }, []);

  return (
    <div className="border border-t-0 border-gray-300 p-4">
      <div>
        <h3 className="flex items-center gap-2 text-2xl font-bold">
          <img className="img-primary h-6 w-6" src={icons.dashBoardIcon} />
          <span>Overview</span>
        </h3>
      </div>

      {overview.length > 0 ? (
        <div className="mt-1 flex gap-4">
          {overview.map(({ id, cardName, value, change }, i) => (
            <OverviewCard
              key={id}
              name={cardName}
              value={value}
              change={change}
              buttonIcon={i === 0 ? icons.cartIcon : i === 1 ? icons.dolarIcon : icons.userIcon}
              color={i ? "blue" : "red"}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}

      <div className="mt-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-2xl font-bold">
          <img className="img-primary h-6 w-6" src={icons.reportIcon} />
          <span>Detailed report</span>
        </h3>

        <div className="flex items-center gap-4">
          <SecondaryButton icon={icons.importIcon}>Import</SecondaryButton>
          <SecondaryButton icon={icons.importIcon} className="rotate-180">
            Export
          </SecondaryButton>
        </div>
      </div>

      <DataTable
        className="hover row-border rounded-lg border border-gray-300 shadow"
        ajax={{
          url: "https://67ee8ffcc11d5ff4bf7a11b6.mockapi.io/reports",
          cache: true,
          dataSrc: (json) =>
            json.map((row) => {
              return {
                ...row,
                orderValue: `$${row.orderValue}`,
                orderDate: new Date(row.orderDate).toLocaleDateString(undefined, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
                status: row.status > 90 ? "Completed" : row.status > 60 ? "In Progress" : "New",
              };
            }),
        }}
        options={{
          select: {
            style: "os",
            selector: "td:first-child",
          },
          columnDefs: [
            {
              render: DataTablesCore.render.select(),
              target: 0,
            },
          ],
          order: false,
          paging: true,
          searching: false,
        }}
        slots={{
          1: (data, row) => <AvatarWithName avatar={row.avatar} name={row.customerName} />,
          5: (data, row) => <Badge status={row.status} />,
          6: (data, row) => <EditButton row={row} />,
        }}
        columns={[
          { orderable: false },
          { orderable: false, data: "customerName" },
          { orderable: false, data: "company" },
          { orderable: false, data: "orderValue" },
          { orderable: false, data: "orderDate" },
          { orderable: false, data: "status" },
          { orderable: false },
        ]}
      >
        <thead>
          <tr>
            <th></th>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
      </DataTable>
    </div>
  );
}
