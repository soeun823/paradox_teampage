import { type FC, useEffect, useRef, useState } from "react";
import * as _ from "./style";
import character from "@datas/character.ts";
import { guest } from "@datas/guest.ts";
import View from "@components/view/viewer";
interface Position {
  x: number;
  y: number;
}
const guestbook = guest.map((guest) => {
  const randomCharacter =
    character[Math.floor(Math.random() * character.length)];
  return {
    name: guest.name,
    character: randomCharacter.id,
    pixel: randomCharacter.pixel,
    real: randomCharacter.real,
    comment: guest.comment,
  };
});

const GuestPage: FC = () => {
  const vocalRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [selectedChar, setSelectedChar] = useState<
    null | (typeof guestbook)[0]
  >(null);

  useEffect(() => {
    if (vocalRef.current) {
      const { offsetWidth, offsetHeight } = vocalRef.current;
      const newPositions = guestbook.map(() => ({
        x: Math.random() * (offsetWidth - 100),
        y: Math.random() * (offsetHeight - 100),
      }));
      setPositions(newPositions);
    }
  }, []);

  const handleBook = (char: (typeof guestbook)[0]) => {
    setSelectedChar(char);
  };
  const handleCloseBook = () => {
    setSelectedChar(null);
  };

  return (
    <_.main id="3">
      <_.section ref={vocalRef}>
        {guestbook.map((char, index) => (
          <>
            <_.charaterSet
              onClick={() => handleBook(char)}
              style={{
                left: positions[index]?.x || 0,
                top: positions[index]?.y || 0,
              }}
            >
              <_.charaterImg
                key={char.character}
                src={char.pixel}
                alt={char.name}
              />
              <_.charaterName>{char.name}</_.charaterName>
            </_.charaterSet>
          </>
        ))}
      </_.section>
      {selectedChar && (
        <View
          name={selectedChar.name}
          img={selectedChar.real}
          comment={selectedChar.comment}
          set={handleCloseBook}
        />
      )}
    </_.main>
  );
};
export default GuestPage;
