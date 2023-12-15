import PageSectionframe from "./PageSection.frame";
export interface datatype {
  id: string;
  title: string;
  content: string;
  content2: string;
  img: string;
}

function PageSection({ content }: { content: datatype[] }) {
  return (
    <div className="layout contant py-[60px]">
      {content.map((item, index) => (
        <PageSectionframe key={index} data={item} isBtn={false} />
      ))}
    </div>
  );
}

export default PageSection;
