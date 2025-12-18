export default function IconCircle({
  icon: Icon,
  bg = "bg-blue-100",
  color = "text-blue-600",
  size = "w-10 h-10",
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${bg} ${size}`}
    >
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
  );
}
