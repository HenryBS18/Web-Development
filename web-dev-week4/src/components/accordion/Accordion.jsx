const Accordion = ({ children, width }) => {
  return (
    <div className={`min-w-[100px] ${width ? width : 'w-[300px]'} max-w-[600px] h-max p-2`}>
      {children}
    </div>
  );
};

export default Accordion;
