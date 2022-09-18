import { data } from '../../../components/Education/data';
import { TopicCardDeck } from '../../../components/TopicCardDeck';

export function Splash() {
    return (
        <>
            <TopicCardDeck data={data}/>
        </>
    );
}
