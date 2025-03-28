type props = {
  title: string;
  className: string;
};
export const Title = ({ title, className }: props) => {
  return <h2 className={`${className}`}>{title}</h2>;
};
