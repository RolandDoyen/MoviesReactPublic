export default function Loading({ message = "Loading..." }) {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">{message}</span>
      </div>
      <p className="mt-3">{message}</p>
    </div>
  );
}