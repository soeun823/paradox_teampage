import header from '@datas/header.json';
import Button from '@components/button';
import Logo from '@assets/logo.svg';
import * as S from './style';

const Header= ()=> {
    return (
        <S.Header>
            <S.InnerFrame>
                <a href="/#main">
                    <S.Logo src={Logo} />
                </a>
                <S.Nav>
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
                </S.Nav>
            </S.InnerFrame>
        </S.Header>
    );
}
export default Header;
