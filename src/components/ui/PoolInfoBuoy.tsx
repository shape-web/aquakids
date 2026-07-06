"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { poolInfo } from "@/data/site";
import { cn } from "@/lib/utils";

type PoolInfoBuoyProps = {
  className?: string;
};

export function PoolInfoBuoy({ className }: PoolInfoBuoyProps) {
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <div className="relative w-full max-w-lg md:max-w-xl">
        {/* Ambient bubbles */}
        <div
          className="ocean-scene-bubble absolute left-[18%] top-[20%] h-2 w-2"
          style={{ "--bubble-delay": "0s", "--bubble-duration": "9s" } as CSSProperties}
          aria-hidden="true"
        />
        <div
          className="ocean-scene-bubble absolute right-[22%] top-[35%] h-1.5 w-1.5"
          style={{ "--bubble-delay": "2s", "--bubble-duration": "11s" } as CSSProperties}
          aria-hidden="true"
        />

        {/* Water shadow beneath floating group */}
        <div
          className="absolute bottom-3 left-1/2 h-7 w-[70%] -translate-x-1/2 rounded-[50%] opacity-55 blur-[4px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(10,61,98,0.18) 0%, transparent 72%)",
          }}
          aria-hidden="true"
        />

        {/* Water surface line */}
        <div
          className="absolute bottom-5 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          aria-hidden="true"
        />

        <div className="pool-info-float relative mx-auto flex w-fit flex-col items-center gap-0 pb-4 pt-2 md:flex-row md:items-end md:gap-5">
          {/* Buoy */}
          <div className="relative shrink-0">
            <Image
              src="/ocean/objects/buoy.svg"
              alt=""
              width={256}
              height={256}
              className="relative z-10 h-auto w-52 drop-shadow-[0_10px_22px_rgba(10,61,98,0.15)] sm:w-56 md:w-64"
            />
          </div>

          {/* Hanging sign — offset from buoy */}
          <div className="relative -mt-2 ml-6 sm:ml-8 md:mt-0 md:mb-6 md:ml-0">
            <div
              className="absolute -left-3 top-4 hidden h-px w-8 origin-right rotate-[24deg] bg-white/35 md:block"
              aria-hidden="true"
            />
            <div
              className="pool-info-sign pool-info-sign-prominent rotate-[3deg] md:rotate-[4deg]"
              role="status"
            >
              <p className="label font-bold text-accent-surface">Pool Info</p>
              <p className="mt-1.5 text-base font-bold leading-snug text-ocean-deep md:text-lg">
                {poolInfo.message}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-body-muted-deep mt-1 text-center text-xs font-medium">
        {poolInfo.altMessages[1]}
      </p>
    </div>
  );
}
