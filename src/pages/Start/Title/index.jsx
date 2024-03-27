/* eslint-disable react/prop-types */
export function Title({content}) {
  return (
    <>
      <div className="grid gap-y-2 justify-center items-center text-center pb-10 md:pb-12 lg:pb-14">
        <h2 className="text-3xl lg:text-4xl font-title font-bold dark:text-light-100">
          {content}
        </h2>
        <div className="w-48 lg:w-56 h-1 rounded-full bg-orange-700"/>
      </div>
    </>
  )
}