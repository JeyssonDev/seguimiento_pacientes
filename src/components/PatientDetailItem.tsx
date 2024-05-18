type PatientDetailItemProps = {
  label: string;
  information: string;
};

export const PatientDetailItem = ({
  label,
  information,
}: PatientDetailItemProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: {''}
      <span className="font-normal normal-case">{information}</span>
    </p>
  );
};
