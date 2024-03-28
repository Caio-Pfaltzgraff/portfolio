export function Card({skill}) {
  return (
    <div className='flex flex-col justify-center gap-4 items-center dark:text-light-200 w-28'>
      <img src={skill.icon} alt={skill.name} className='aspect-square max-w-16 max-h-16 hover:-translate-y-2 duration-500' />
      <p className='text-center font-extrabold tracking-wider'>
        {skill.name}
      </p>
      <p className='text-gray-500 dark:text-gray-500 font-medium text-sm'>
        {skill.level}
      </p>
    </div>
  )
}