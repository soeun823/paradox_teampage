import header from '@datas/header.json';
import Button from '@components/button';
import Logo from '@assets/logo.svg';
import * as _ from './style';
import {useLocationStore} from "@/store/navigationStore.ts";
const Header= ()=> {
    const isLocate = useLocationStore((state) => state.isLocate);
    console.log(isLocate);
    return (
        <_.Header>
            <_.InnerFrame>
                <a href="/#main">
                    <_.Logo src={Logo} />
                </a>
                <_.Nav>
                    {header.map((item) => {
                        return (
                            <a href={item.to} key={item.id}>
                                <Button
                                    title={item.title}
                                    isActive={isLocate === item.id}
                                    onClick={() => console.log(item)}
                                />
                            </a>
                        );
                    })}
                </_.Nav>
            </_.InnerFrame>
        </_.Header>
    );
}
export default Header;
