import { useParams, useNavigate } from "react-router";

const users = [{
  id: 1,
    name: "Kaviyarasi",
    email: "Sincere@gmail.com",
    phone: "1-770-736-8031",
    
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "ervin@gmail.com",
    phone: "010-692-6593 ",
  },
  {
    id: 3,
    name: "Nivetha",
    email: "nivetha@gmail.com",
    phone: "493-170-9623 ", 

    },
  {
    id: 4,
    name: "Pooja",
    email: "pooja@gmail.com",
    phone: "493-170-9623 ",  
  },
  {
    id: 5,
    name: "Anandhi",
    email: "anandhi@gmail.com",
    phone: "493-170-9623",  
  },
  {
    id: 6,
    name: "Vanamalai",
    email: "vana15@gmail.com",
    phone: "493-170-9623",  
  },
  {
    id: 7,
    name: "Sathya",
    email: "sathya@gmail.com",
    phone: "493-170-9623",  
  },
  {
    id: 8,
    name: "Akash",
    email: "akash10@gmail.com",
    phone: "493-170-9623 ",  
  },
  {
    id: 9,
    name: "Mukesh",
    email: "mukesh@gmail.com",
    phone: "493-170-9623",  
  },
];

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h3>User not found </h3>;
  }

  return (
    <div className="bg-blue-100  min-h-screen">
    <div>
      <h2 className="text-4xl font-sans text-center pb-7">User Details</h2>
      <div className="flex justify-center ">
      <div className="box">
      <p className="p-2"><b>Id:</b> {user.id}</p>
      <p className="p-2"><b>Name:</b> {user.name}</p>
      <p className="p-2"><b>Email:</b> {user.email}</p>
      <p className="p-2"><b>Phone:</b> {user.phone}</p>
       <div className="pl-2">
      <button  className="w-100px border-1 p-1 bg-red-400 text-white rounded-md px-3  flex" onClick={() => navigate("/list-users")}>
        Go Back to UsersList
      </button>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default UserDetails;