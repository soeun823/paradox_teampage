import {type FC, useEffect, useRef, useState} from "react";
import * as _ from './style';
import character from "@datas/character.ts";
import View from "@components/view";
interface Position {
    x: number;
    y: number;
}

const GuestPage: FC = () => {
    const vocalRef = useRef<HTMLDivElement>(null);
    const [positions, setPositions] = useState<Position[]>([]);
    const [selectedChar, setSelectedChar] = useState<null | typeof character[0]>(null);

    useEffect(() => {
        if (vocalRef.current) {
            const { offsetWidth, offsetHeight } = vocalRef.current;
            const newPositions = character.map(() => ({
                x: Math.random() * (offsetWidth - 100),
                y: Math.random() * (offsetHeight - 100),
            }));
            setPositions(newPositions);
        }
    }, []);

    const handleBook = (char: typeof character[0]) => {
        setSelectedChar(char);
    };
    const handleCloseBook = () => {
        setSelectedChar(null);
    };


    return (
        <_.main id="3">
            <_.section ref={vocalRef}>
                {character.map((char, index) => (
                    <>
                    <_.charaterSet
                        onClick={() => handleBook(char)}
                        style={{
                        left: positions[index]?.x || 0,
                        top: positions[index]?.y || 0,
                    }}>
                    <_.charaterImg
                        key={char.id}
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
                    set={handleCloseBook}
                />
            )}
        </_.main>
    )
}
export default GuestPage