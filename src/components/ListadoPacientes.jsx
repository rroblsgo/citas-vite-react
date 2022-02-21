import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <div>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 lg:mb-10 sm:mb-20 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll">
            {pacientes.map((paciente) => (
              <Paciente key={paciente.id} paciente={paciente} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 lg:mb-10 sm:mb-20 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ListadoPacientes;
