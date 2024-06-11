export function SectionTemplate({ children, title, id }) {
  return (
    <section id={id}>
      <div className="py-10 md:py-12 lg:py-14 mx-auto max-w-screen-xl padding-page">
        <Title content={title} />

        {children}
      </div>
    </section>
  );
}

function Title({ content }) {
  return (
    <div className="flex justify-center py-10">  
      <div 
        className="text-3xl lg:text-4xl font-title border-b-4 border-b-orange-600 rounded w-fit dark:text-light-100 font-bold px-4 pb-1"
      >
        {content}
      </div>
    </div>
  );
}
