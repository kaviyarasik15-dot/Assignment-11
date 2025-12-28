
import { useNavigate } from "react-router";

const users=[{
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

function UsersList() {
  const navigate = useNavigate();

  return (
    <div className="bg-red-100  min-h-screen">
    <div>
      <h2 className="text-4xl font-sans text-center pb-7">User List</h2>
      <div className="container">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <strong>{user.name}</strong>
          <br />
          <div className="p-3"><button className="button"onClick={() => navigate(`/user/${user.id}`)}>
            View Details
          </button>
          </div>
        </div>
        
      ))}
    </div>
    </div>
    </div>
  );
}

export default UsersList;



