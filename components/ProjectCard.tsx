type Props = {
  title: string
  description: string
  link: string
  stack: string[]
}

export default function ProjectCard({ title, description, link, stack }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{description}</p>
      <div className="text-xs text-blue-600">{stack.join(" • ")}</div>
      <a href={link} target="_blank" className="text-sm text-blue-500 mt-2 inline-block">View on GitHub</a>
    </div>
  );
}
