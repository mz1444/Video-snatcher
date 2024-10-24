const Button = ({ label, onClick, className }) => {
  return (
    <button 
      className={`px-4 py-2
         bg-gradient-to-r from-red-900 via-orange-900 to-blue-900 text-white rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
