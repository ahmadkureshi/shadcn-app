import { Payment, columns } from "./column";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "1@example.com",
    },
    {
      id: "728edasds52f",
      amount: 200,
      status: "processing",
      email: "2@example.com",
    },
    {
      id: "728ed52f",
      amount: 300,
      status: "success",
      email: "3@example.com",
    },
    {
      id: "728edasds52f",
      amount: 400,
      status: "pending",
      email: "4@example.com",
    },
    {
      id: "728ed52f",
      amount: 500,
      status: "processing",
      email: "5@example.com",
    },
    {
      id: "728edasds52f",
      amount: 600,
      status: "success",
      email: "6@example.com",
    },
    {
      id: "728ed52f",
      amount: 700,
      status: "pending",
      email: "7@example.com",
    },
    {
      id: "728edasds52f",
      amount: 800,
      status: "processing",
      email: "8@example.com",
    },
    {
      id: "728ed52f",
      amount: 900,
      status: "pending",
      email: "9@example.com",
    },
    {
      id: "728edasds52f",
      amount: 1000,
      status: "success",
      email: "10@example.com",
    },
    {
      id: "728ed52f",
      amount: 1100,
      status: "processing",
      email: "11@example.com",
    },
    {
      id: "728edasds52f",
      amount: 1200,
      status: "pending",
      email: "12@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
