export const userColumns = [
  { field: "id", headerName: "ID", width: 230 },
  {
    field: "name",
    headerName: "User",
    width: 150,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "contact",
    headerName: "Contact No",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        params.row.status === "Passive" ? <p style={{ color: "#ff0000", fontWeight: "bold" }}>{params.row.status}</p> :
            params.row.status === "Active" ? <p style={{ color: "#008240", fontWeight: "bold" }}>{params.row.status}</p> :
            params.row.status === "Pending" ? <p style={{ color: "rgb(223, 163, 21)", fontWeight: "bold" }}>{params.row.status}</p> :
                <p style={{ color: "#B0B700", fontWeight: "bold" }}>{params.status}</p>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Aaditya",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "Aaditya@gmail.com",
    age: 35,
    contactno:"9898988989"
  },
  {
    id: 2,
    username: "Akshat",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Akshat@gmail.com",
    status: "passive",
    age: 42,
    contactno:"9898988989"
  },
  {
    id: 3,
    username: "Harish",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Harish@gmail.com",
    status: "pending",
    age: 45,
    contactno:"9898988989"
  },
  {
    id: 4,
    username: "Prit",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Prit@gmail.com",
    status: "active",
    age: 16,
    contactno:"9898988989"
  },
  {
    id: 5,
    username: "Kunal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Kunal@gmail.com",
    status: "passive",
    age: 22,
    contactno:"9898988989"
  },
  {
    id: 6,
    username: "Mohit",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Mohit@gmail.com",
    status: "active",
    age: 15,
    contactno:"9898988989"
  },
  {
    id: 7,
    username: "Chirag",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Chirag@gmail.com",
    status: "passive",
    age: 44,
    contactno:"9898988989"
  },
  {
    id: 8,
    username: "Aakash",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Aakash@gmail.com",
    status: "active",
    age: 36,
    contactno:"9898988989"
  },
  {
    id: 9,
    username: "Rohit",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Rohit@gmail.com",
    status: "pending",
    age: 65,
    contactno:"9898988989"
  },
  {
    id: 10,
    username: "Rohan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Rohan@gmail.com",
    status: "active",
    age: 65,
    contactno:"9898988989"
  },
];
