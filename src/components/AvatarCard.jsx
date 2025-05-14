import React from "react";

const DummyAvatarsSection = () => {
  const dummyAvatars = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      name: "Alice Brown",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Avatar Showcase</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyAvatars.map(avatar => (
          <div key={avatar.id} className="bg-[#1a1f38] rounded-xl overflow-hidden shadow-lg">
            <div className="h-32 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 relative">
              <img
                src={avatar.image}
                alt={avatar.name}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-4 border-[#1a1f38] object-cover"
              />
            </div>
            <div className="pt-12 pb-4 px-4">
              <h3 className="text-lg font-semibold text-white text-center mb-1">{avatar.name}</h3>
              <p className="text-sm text-gray-400 mb-4 text-center">AI Generated Avatar</p>
              <div className="flex justify-center">
                <button className="flex items-center text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyAvatarsSection;
