import EventCard from "./components/EventCard";
import ExploreBtn from "./components/ExploreBtn";
import { events } from "@/lib/constants";

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        Hello, Next.js!
        <br />
        You can't miss this amazing event!
      </h1>

      <p className="text-center mt-5">This is a sample page.</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7" id="events">
        <h3>Featured Events</h3>
        <p className="text-light-100 text-sm">
          Discover curated conferences, meetups, and hackathons for developers.
        </p>

        <ul className="events">
          {events.map((event) => (
            <li key={event.slug}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;