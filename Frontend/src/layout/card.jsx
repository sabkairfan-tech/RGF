

export default function Card(props) {
  return (
    <div className="w-550px flex justify-around items-center bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl">{props.title}:</h2>
        <h1 className="text-3xl font-bold text-orange-400">{props.value}</h1>
        <p className="text-5xl">{props.icon}</p>
    </div>
  );
}