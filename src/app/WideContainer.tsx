interface WideContainerProps {
  children: React.ReactNode;
  id?: string;
}
const WideContainer: React.FC<WideContainerProps> = ({ children, id }) => {
  return (
    <div id={id} className="max-w-[1920px] mx-auto overflow-hidden">
      {children}
    </div>
  );
};

export default WideContainer;
