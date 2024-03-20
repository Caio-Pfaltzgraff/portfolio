/* eslint-disable react/prop-types */
export function SkillsCard({skill}) {
  return (
    <div className='flex flex-col justify-center gap-4 items-center dark:text-light-200'>
      <img src={skill.icon} alt={skill.name} className='aspect-square max-w-16 max-h-16 hover:-translate-y-2 duration-500' />
      <p className='text-center font-developer font-semibold text-lg'>
        {skill.name}
      </p>
      <p className='text-gray-700 dark:text-gray-400 font-medium'>
        {skill.level}
      </p>
    </div>
  )
}