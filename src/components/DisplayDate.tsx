import { format } from "date-fns";

const TOKEN = "EEEE LLLL d, yyyy";

export default function DateFormatter({ datetime }: { datetime: string }) {
  const date = new Date(datetime);
  const displayDate = format(date, TOKEN);
  const dateTime = date.toISOString();
  return (
    <time className="published updated dt-published" dateTime={dateTime}>
      {displayDate}
    </time>
  );
}
