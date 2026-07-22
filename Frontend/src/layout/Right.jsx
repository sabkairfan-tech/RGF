

export default function Right(props) {
  return (
    <div className="w-64 h-20 bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
        <h2 className="text-xl">{props.title}:</h2>
        <h1 className="text-3xl font-bold text-orange-400">{props.value}</h1>
        <p className="text-5xl">{props.icon}</p>
    </div>
  );
}