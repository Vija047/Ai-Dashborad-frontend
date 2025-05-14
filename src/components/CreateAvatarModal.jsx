import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

const CreateAvatarModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [style, setStyle] = useState("Realistic");
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#161b33] p-8 rounded-xl max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-white">Create New Avatar</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <p className="text-gray-400 mb-6">Fill in the details to generate your new AI avatar.</p>
        
        <div className="mb-4">
          <label className="block text-white mb-2">Name</label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#1e2440] border border-[#2e3458] text-white p-3 rounded-lg focus:border-indigo-500 focus:outline-none"
            placeholder="Enter a name for your avatar"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#1e2440] border border-[#2e3458] text-white p-3 rounded-lg focus:border-indigo-500 focus:outline-none"
            placeholder="Enter an email address"
          />
        </div>
        
        <div className="mb-8">
          <label className="block text-white mb-2">Style</label>
          <div className="relative">
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-[#1e2440] border border-[#2e3458] text-white p-3 rounded-lg appearance-none focus:border-indigo-500 focus:outline-none"
            >
              <option>Realistic</option>
              <option>Cartoon</option>
              <option>Anime</option>
              <option>3D</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose} 
            className="px-6 py-2 rounded-lg bg-transparent text-white hover:bg-[#2a314d] transition-colors"
          >
            Cancel
          </button>
          <button 
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
          >
            Create Avatar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAvatarModal;