import * as _ from "./style";

interface PropsType {
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ title, onClick, isActive }: PropsType) {
  return (
    <_.Button isActive={isActive} onClick={onClick}>
      {title}
    </_.Button>
  );
}
