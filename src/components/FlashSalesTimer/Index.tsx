// components/FlashSales.tsx
"use client";
import Typography from "@/general/Typography/Typography";
import { useEffect, useState } from "react";

interface Countdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface FlashSalesProps {
  targetDate: string; // ISO string or any parsable date
}

export default function FlashSales({ targetDate }: FlashSalesProps) {
  const calculateTimeLeft = (): Countdown => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const Label = ({ children }: { children: string }) => (
    <div className="text-xsm uppercase text-gray-500">
      <Typography fontSize="xsm" weight="bold">{children}</Typography>
    </div>
  );
  const Value = ({ children }: { children: string }) => (
    <div className="font-mono">
      <Typography fontSize="xxl" weight="bold">{children}</Typography>
    </div>
  );

  // ─── UPDATED SEPARATOR ───────────────────────
  const Separator = () => (
    <div className="self-center mx-2 flex items-center">
      <Typography fontSize="xxl" weight="bold" className="text-red-500">:</Typography>
    </div>
  );
  // ─────────────────────────────────────────────

  return (
    <div className="flex items-center space-x-8 gap-16 my-8">
      {/* Title */}
      <Typography fontSize="xxl" weight="bold">Flash Sales</Typography>

      {/* Countdown */}
      <div className="flex items-end">
        {/* Days */}
        <div className="flex flex-col items-center">
          <Label>Days</Label>
          <Value>{timeLeft.days}</Value>
        </div>

        <Separator />

        {/* Hours */}
        <div className="flex flex-col items-center">
          <Label>Hours</Label>
          <Value>{timeLeft.hours}</Value>
        </div>

        <Separator />

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <Label>Minutes</Label>
          <Value>{timeLeft.minutes}</Value>
        </div>

        <Separator />

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <Label>Seconds</Label>
          <Value>{timeLeft.seconds}</Value>
        </div>
      </div>
    </div>
  );
}
