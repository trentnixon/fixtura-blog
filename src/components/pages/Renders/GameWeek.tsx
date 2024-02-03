import { Fixture } from '@/interfaces/Render';
import Link from 'next/link';

interface GameWeekProps {
  weekLabel: string;
  weekData: {
    id: number;
    results: Fixture[];
    upcoming: Fixture[];
  };
  sport: string;
  account: string;
}

const GameWeek: React.FC<GameWeekProps> = ({ weekLabel, weekData, sport, account }) => {
  return (
    <div key={weekLabel}>
      <h2>{weekLabel}</h2>
      <Link href={`/${sport}/${account}/${weekData.id}`}>
        View Details for Result {weekData.id}
      </Link>
      <p>Results: {weekData.results.length}</p>
      <p>Upcoming: {weekData.upcoming.length}</p>
    </div>
  );
};

export default GameWeek;
