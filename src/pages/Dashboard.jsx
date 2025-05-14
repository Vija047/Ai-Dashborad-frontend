import { useEffect, useState } from "react";
import AvatarCard from "../components/AvatarCard";
import CreateAvatarModal from "../components/CreateAvatarModal";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(data => {
        setAvatars(data.data.slice(0, 3)); 
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching avatars:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#121628]">
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Avatar Haven
            </h1>
            <p className="text-gray-400 mt-1">Good evening, Thomas</p>
          </div>

          <div
            className="bg-[#1a1f38] px-4 py-2 rounded-full cursor-pointer hover:bg-[#2a2f4a]" 
            onClick={() => navigate("/avatars")} 
          >
            <span className="text-gray-300 text-sm">
              {isLoading ? "Loading..." : `${avatars.length || 3} Avatars Available`} 
              
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {avatars.map(user => (
              <AvatarCard 
                key={user.id} 
                name={`${user.first_name} ${user.last_name}`} 
                image={user.avatar} 
              />
            ))}
          </div>
        )}
      </main>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center"
      >
        <Plus className="mr-2 h-5 w-5" /> Create New Avatar
      </button>

      <CreateAvatarModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Dashboard;
