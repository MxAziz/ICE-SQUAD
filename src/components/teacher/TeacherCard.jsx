
const TeacherCard = ({ photo, name, designation, study, field, email, number }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-100">
      {/* Image */}
      <div className="relative group">
        <img
          src={photo}
          alt={name}
          className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300"
        />
        {/* Overlay Email Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <a
            href={`mailto:${email}`}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md font-medium hover:bg-gray-200 transition"
          >
            📩 Email
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold capitalize">{name}</h2>
        {designation && (
          <p className="text-primary font-semibold">{designation}</p>
        )}
        {study && (
          <p className="text-gray-500 text-sm">🎓 {study}</p>
        )}
        {field && (
          <p className="text-gray-600 text-sm">📚 {field}</p>
        )}
        {email && (
          <p className="text-gray-600 text-sm">✉️ {email}</p>
        )}
        {number && (
          <p className="text-gray-600 text-sm">📞 {number}</p>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
