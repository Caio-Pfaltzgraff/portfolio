/* eslint-disable react/prop-types */
export function Title({content}) {
  return (
    <>
      <div className="text-center pb-10 md:pb-12 lg:pb-14">
        <h2 className="text-3xl font-title font-bold dark:text-light-100">
          {content}
        </h2>
      </div>
    </>
  )
}