import { type FC, useEffect, useRef, useState } from "react";
import * as _ from "./style";
import character from "@datas/character.ts";
import { loadUserData } from "@/api/user";
import View from "@components/view/viewer";
import { useSelectedCharStore } from "@/store/selectedCharStore.ts";

interface Position {
  x: number;
  y: number;
}

interface GuestbookEntry {
  name: string;
  character: number;
  pixel: string;
  real: string;
  comment: string;
}

const GuestPage: FC = () => {
  const vocalRef = useRef<HTMLDivElement>(null);
  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  // const [selectedChar, setSelectedChar] = useState<null | GuestbookEntry>(null);
  const setSelectedCharStore = useSelectedCharStore(
    (state) => state.setSelectedChar,
  );

  useEffect(() => {
    async function fetchGuest() {
      const guests = await loadUserData();
      const mappedGuests = guests.map((guest) => {
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
      setGuestbook(mappedGuests);
    }
    fetchGuest();
  }, []);

  useEffect(() => {
    if (vocalRef.current && guestbook.length > 0) {
      const { offsetWidth, offsetHeight } = vocalRef.current;
      const newPositions = guestbook.map(() => ({
        x: Math.random() * (offsetWidth - 100),
        y: Math.random() * (offsetHeight - 100),
      }));
      setPositions(newPositions);
    }
  }, [guestbook]);

  const handleBook = (char: GuestbookEntry) => {
    setSelectedCharStore({
      name: char.name,
      real: char.real,
      comment: char.comment,
    });
  };

  const selectedChar = useSelectedCharStore((state) => state.selectedChar);
  const clearSelectedChar = useSelectedCharStore(
    (state) => state.clearSelectedChar,
  );

  return (
    <_.main id="3">
      <_.section ref={vocalRef}>
        {guestbook.map((char, index) => (
          <_.charaterSet
            key={index}
            onClick={() => handleBook(char)}
            style={{
              left: positions[index]?.x || 0,
              top: positions[index]?.y || 0,
            }}
          >
            <_.charaterImg src={char.pixel} alt={char.name} />
            <_.charaterName>{char.name}</_.charaterName>
          </_.charaterSet>
        ))}
      </_.section>
      {selectedChar && (
        <View
          name={selectedChar.name}
          img={selectedChar.real}
          comment={selectedChar.comment}
          set={clearSelectedChar}
        />
      )}
    </_.main>
  );
};

export default GuestPage;
