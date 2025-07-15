import header from '@datas/header.json';
import Button from '@components/button';
import Logo from '@assets/logo.svg';
import * as _ from './style';
const Header= ()=> {
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
                                    color={`var(--white)`}
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
