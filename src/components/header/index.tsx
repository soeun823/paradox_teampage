import header from "@datas/header.json";
import Button from "@components/button";
import Logo from "@assets/logo.svg";
import * as _ from "./style";
import { useLocationStore } from "@/store/navigationStore.ts";
const Header = () => {
  const isLocate = useLocationStore((state) => state.isLocate);
  console.log(isLocate);
  return (
    <_.Header>
      <_.InnerFrame>
        <_.Location href="/#introduce">
          <_.Logo src={Logo} />
        </_.Location>
        <_.Nav>
          {header.map((item) => {
            return (
              <_.LocationItem href={item.to} key={item.id}>
                <Button
                  title={item.title}
                  isActive={isLocate === item.id}
                  onClick={() => console.log(item)}
                />
              </_.LocationItem>
            );
          })}
        </_.Nav>
      </_.InnerFrame>
    </_.Header>
  );
};
export default Header;
