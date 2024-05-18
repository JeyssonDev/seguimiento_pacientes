import { toast } from 'react-toastify';
import { usePatientStore } from '../store';
import { Patient } from '../types';
import { PatientDetailItem } from './PatientDetailItem';

type PatientDetailProps = {
  patient: Patient;
};

export const PatientDetail = ({ patient }: PatientDetailProps) => {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleClickDelete = () => {
    deletePatient(patient.id)
    toast.error('Paciente Eliminado')
  }
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" information={patient.id} />
      <PatientDetailItem label="Nombre" information={patient.name} />
      <PatientDetailItem label="Propietario" information={patient.caretaker} />
      <PatientDetailItem label="Email" information={patient.email} />
      <PatientDetailItem
        label="Fecha Alta"
        information={patient.date.toString()}
      />
      <PatientDetailItem label="Síntomas" information={patient.symptoms} />

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-lg"
          onClick={handleClickDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
