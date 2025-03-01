
const SubmitButton = ({
  label,
  disabled,
}: {
  label: string;
  disabled?: boolean;
}) => {
  return (
    <button
      type="submit"
      className="submitbtn uppercase text-sm btn w-full text-white disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed shadow-none p-4 rounded-md"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
