import Image from "next/image";
import type { CSSProperties } from "react";
import { ClientLogo } from "@/data/clients";

export default function LogoMarquee({ clients }: { clients: ClientLogo[] }) {
  const track = [...clients, ...clients];

  return (
    <div
      className="marquee-mask relative overflow-hidden w-full"
    >
      <div
        className="marquee-track flex w-max"
        style={{
          "--marquee-duration-desktop": `${clients.length * 6}s`,
          "--marquee-duration-mobile": `${clients.length * 3}s`,
        } as CSSProperties}
      >
        {track.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex flex-col items-center justify-center shrink-0 w-56 h-48 md:w-64 md:h-44 mx-4 px-6 py-6"
            style={{ border: "1px solid rgba(10,22,40,0.08)" }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={180}
              height={70}
              className="max-h-12 md:max-h-14 max-w-[75%] w-auto h-auto object-contain"
              style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
            />
            <p
              className="mt-4 text-center text-[11px] font-semibold tracking-wide uppercase leading-snug line-clamp-3 md:line-clamp-2"
              style={{ color: "var(--navy)", opacity: 0.55 }}
            >
              {client.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
