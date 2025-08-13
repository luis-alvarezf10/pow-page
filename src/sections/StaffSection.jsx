const StaffSection = () => {
  const staff = [
    {
      category: "Coaches",
      members: [
        { name: "Ana García", specialty: "Entrenamiento funcional", experience: "5 años" },
        { name: "Carlos López", specialty: "Fuerza y acondicionamiento", experience: "8 años" },
        { name: "María Rodríguez", specialty: "CrossFit y HIIT", experience: "6 años" }
      ]
    },
    {
      category: "Fisioterapeutas",
      members: [
        { name: "Dr. Juan Martín", specialty: "Rehabilitación deportiva", experience: "10 años" },
        { name: "Dra. Laura Sánchez", specialty: "Terapia manual", experience: "7 años" }
      ]
    },
    {
      category: "Nutricionistas",
      members: [
        { name: "Lic. Pedro Ruiz", specialty: "Nutrición deportiva", experience: "9 años" },
        { name: "Lic. Carmen Torres", specialty: "Planes personalizados", experience: "6 años" }
      ]
    }
  ];

  return (
    <section id="staff" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600">Profesionales especializados para tu bienestar</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {staff.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                    <p className="text-yellow-600 text-sm font-medium">{member.experience} de experiencia</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;