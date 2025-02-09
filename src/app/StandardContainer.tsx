interface StandardContainerProps {
  children: React.ReactNode;
  id?: string;
}
const StandardContainer: React.FC<StandardContainerProps> = ({
  children,
  id,
}) => {
  return (
    <div id={id} className="max-w-[1280px] mx-auto">
      {children}
    </div>
  );
};

export default StandardContainer;
