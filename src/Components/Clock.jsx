import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Rensa intervallet vid unmount
  }, []);

  // Skapa en array med veckodagar på svenska
  const weekdays = ["Sön", "Mån", "Tis", "Ons", "Tors", "Fre", "Lör"];
  
  // Hämta rätt veckodag, datum och tid i önskat format
  const day = weekdays[time.getDay()];
  const date = time.getDate();
  const month = time.getMonth() + 1; // getMonth() börjar på 0
  const formattedTime = time.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="clock">
      <p>{`${day} ${date}/${month} - ${formattedTime}`}</p>
    </div>
  );
}

export default Clock;