/* eslint-disable react/prop-types */
export function LinkIcon({path, children, animation = false}) {
  return (
    <a
      href={path}
      target="_blank"
      className={animation && 'hover:-translate-y-4 duration-500 ease-in cursor-pointer'}
    >
      {children}
    </a>
  )
}