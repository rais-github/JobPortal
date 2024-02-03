const PageHeader = ({ title, path }) => {
  return (
    <div className="py-24 mt-3 ☐ bg-[#FAFAFA] rounded flex items-center justify-center w-full">
      <div>
        <h2 className=" text-red font-bold mb-1 text-center">
          {title}
        </h2>

        <p className="text-sm text-center">
          <a href="/">{path}</a> 
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
