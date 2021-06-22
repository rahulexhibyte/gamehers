import { CDataTable } from "@coreui/react";

const fields = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phone",
    label: "Phone",
  },
];
const items = [
  {
    name: "Rahul Rathod",
    age: 20,
    email: "rahul.exhibyte@gmail.com",
    phone: 1234567890,
  },
  {
    name: "Rahul Rathod",
    age: 20,
    email: "rahul.exhibyte@gmail.com",
    phone: 1234567890,
  },
  {
    name: "Rahul Rathod",
    age: 20,
    email: "rahul.exhibyte@gmail.com",
    phone: 1234567890,
  },
  {
    name: "Rahul Rathod",
    age: 20,
    email: "rahul.exhibyte@gmail.com",
    phone: 1234567890,
  },
  {
    name: "Rahul Rathod",
    age: 20,
    email: "rahul.exhibyte@gmail.com",
    phone: 1234567890,
  },
];

const Table = ({ item = items, field = fields }) => {
  return (
    <>
      <CDataTable items={item} fields={field}></CDataTable>
    </>
  );
};

export default Table;
