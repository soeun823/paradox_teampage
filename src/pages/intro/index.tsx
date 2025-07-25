import * as _ from "@pages/intro/style.ts";
const Intro = () => {
  return (
    <_.main id="0">
      <_.section>
        <_.info>
          <_.title>
            <div>파라독스</div>
            <div>PARADOX</div>
          </_.title>
          <div>
            고구마는 옥수수를 좋아해 하지만 옥수수는 고구마보다 감자를 더
            좋아하는 것 같아서 심술이 난 고구마는 감자를 캐러가기로 결심 했어요.
            고구마는 옥수수를 좋아해 하지만 옥수수는 고구마보다 감자를 더
            좋아하는 것 같아서 심술이 나
          </div>
        </_.info>
        <_.descrips>
          <Windows></Windows>
        </_.descrips>
      </_.section>
    </_.main>
  );
};
const Windows = () => {
  return (
    <>
      <_.window p={20}>
        <_.w_header>♥ 소개.txt</_.w_header>
        <_.w_bady />
      </_.window>
      <_.window>
        <_.w_header>♥ 소개.txt</_.w_header>
        <_.w_bady />
      </_.window>
      <_.window p={25}>
        <_.w_header>♥ 소개.txt</_.w_header>
        <_.w_bady />
      </_.window>
    </>
  );
};

export default Intro;
