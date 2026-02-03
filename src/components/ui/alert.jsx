export default function Alert({ message, type = 'success', onClose }) {
  if (!message) return null;

  const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';

  return (
    <div 
      className={`alert ${alertClass} message-box`}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1050,
        minWidth: '300px',
        maxWidth: '500px'
      }}
    >
      {message}
      {onClose && (
        <button 
          type="button" 
          className="btn-close float-end" 
          onClick={onClose}
          aria-label="Close"
        ></button>
      )}
    </div>
  );
}