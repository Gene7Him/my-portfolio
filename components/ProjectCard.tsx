import { motion } from 'framer-motion';


type Props = {
  title: string
  description: string
  link: string
  stack: string[]
}

export default function ProjectCard({ title, description, link, stack }: Props) {
  return (
    <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-12 px-8 "
        >
    <div className="rounded-xl bg-white/90 dark:bg-slate-900 p-4 shadow-md hover:shadow-xl transition-all bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{description}</p>
      <div className="text-xs text-blue-600">{stack.join(" • ")}</div>
      <a href={link} target="_blank" className="text-sm text-blue-500 mt-2 inline-block hover:underline">View on GitHub</a>
    </div>
    </motion.section>
  );
}
