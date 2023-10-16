const Accordion = ({ children }) => {
  return (
    <div className='min-w-[100px] w-[300px] h-max p-2'>
      {children}
    </div>
  );
};

export default Accordion;
