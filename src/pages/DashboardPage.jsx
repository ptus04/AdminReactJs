import { useState, useEffect } from "react";
import { AvatarWithName, Badge, EditButton } from "../components";
import DataTable from "datatables.net-react";
import DataTablesCore from "datatables.net-dt";
import "datatables.net-select-dt";
import icons from "../icon-pack";
import { Link } from "react-router";

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
    <>
      <div className="layout h-dvh p-2">
        <div className="layout-header flex items-center justify-between border border-gray-300 p-4">
          <h1 className="text-3xl font-bold text-[var(--my-color-red)]">Dashboard</h1>
          <div className="flex items-center gap-4">
            <form className="flex items-center gap-1 rounded-lg bg-gray-200 px-4 py-2">
              <img className="h-4 w-4" src={icons.searchIcon} />
              <input type="search" placeholder="Search..." />
            </form>
            <button>
              <img className="h-6 w-6" src={icons.notificationIcon} />
            </button>
            <button>
              <img className="h-6 w-6" src={icons.helpIcon} />
            </button>
            <Link href="profile">
              <img className="h-10 w-10" src="https://avatar.iran.liara.run/public" />
            </Link>
          </div>
        </div>

        <div className="layout-navbar border border-r-0 border-gray-300 p-4">
          <h2 className="text-3xl font-bold">Logo</h2>
          <ul className="navbar mt-8 flex flex-col gap-2">
            <li>
              <a className="active flex items-center gap-2 px-4 py-2" href="#">
                <img className="h-6 w-6" src={icons.dashBoardIcon} />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-4 py-2" href="#">
                <img className="h-6 w-6" src={icons.projectsIcon} />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-4 py-2" href="#">
                <img className="h-6 w-6" src={icons.teamsIcon} />
                <span>Teams</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-4 py-2" href="#">
                <img className="h-6 w-6" src={icons.analysticsIcon} />
                <span>Analystics</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-4 py-2" href="#">
                <img className="h-6 w-6" src={icons.messagesIcon} />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-4 py-2" href="#">
                <img className="h-6 w-6" src={icons.integrationsIcon} />
                <span>Integrations</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="layout-main border border-t-0 border-gray-300 p-4">
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <img className="h-4 w-4" src={icons.dashBoardIcon} />
              <span>Overview</span>
            </h3>
          </div>

          {overview.length > 0 ? (
            <div className="mt-1 flex gap-4">
              {overview.map(({ id, cardName, value, change }, i) => (
                <div
                  className={`card relative w-1/3 rounded-lg ${i ? "bg-[var(--my-color-blue-dim)]" : "bg-[var(--my-color-red-dim)]"} p-4`}
                  key={id}
                >
                  <h4 className="text-xl font-bold">{cardName}</h4>
                  <p className="text-3xl font-bold">{value}</p>
                  <p>
                    <span className="font-bold text-green-600">{change}</span>
                    <span> period of change</span>
                  </p>
                  <a
                    className={`absolute top-4 right-4 rounded-md border p-1 ${i ? "border-[var(--my-color-blue)]" : "border-[var(--my-color-red)]"}`}
                    href="#"
                  >
                    <img className="h-8 w-8" src={icons.cartIcon} />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}

          <div className="mt-6 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <img className="h-4 w-4" src={icons.reportIcon} />
              <span>Detailed report</span>
            </h3>

            <div className="flex items-center gap-4">
              <button className="btn-secondary flex cursor-pointer items-center rounded-sm border border-[var(--my-color-red)] px-3 py-1 text-[var(--my-color-red)]">
                <img className="h-4 w-4" src={icons.importIcon} />
                <span>Import</span>
              </button>

              <button className="btn-secondary flex cursor-pointer items-center rounded-sm border border-[var(--my-color-red)] px-3 py-1 text-[var(--my-color-red)]">
                <img className="h-4 w-4 rotate-180" src={icons.importIcon} />
                <span>Export</span>
              </button>
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
                    orderDate: new Date(row.orderDate).toLocaleDateString("vi-vn", {
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
                  orderable: false,
                  render: DataTablesCore.render.select(),
                  targets: 0,
                },
              ],
              order: [[1, "asc"]],
            }}
            slots={{
              1: (data, row) => <AvatarWithName avatar={row.avatar} name={row.customerName} />,
              5: (data, row) => <Badge status={row.status} />,
              6: (data, row) => <EditButton row={row} />,
            }}
            columns={[
              { orderable: false },
              { data: "customerName" },
              { data: "company" },
              { data: "orderValue" },
              { data: "orderDate" },
              { data: "status" },
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
      </div>
    </>
  );
}
