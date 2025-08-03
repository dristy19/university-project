const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <img src={college.logo} alt={college.name} className="h-32 w-full object-contain mb-4" />
      <h3 className="text-lg font-bold">{college.name}</h3>
      <p className="text-sm text-gray-600">{college.city}, {college.state}</p>
      <p className="text-sm text-gray-600">{college.streams}</p>
    </div>
  );
};

export default CollegeCard;
