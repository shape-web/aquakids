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
    <div className={cn("pool-info-unit", className)}>
      <div
        className="ocean-scene-bubble absolute -left-2 top-[18%] h-1.5 w-1.5"
        style={{ "--bubble-delay": "0s", "--bubble-duration": "11s" } as CSSProperties}
        aria-hidden="true"
      />
      <div
        className="ocean-scene-bubble absolute -right-1 top-[42%] h-2 w-2"
        style={{ "--bubble-delay": "2.4s", "--bubble-duration": "13s" } as CSSProperties}
        aria-hidden="true"
      />

      <div className="pool-info-float relative flex flex-col items-center">
        <div
          className="pool-info-sign pool-info-sign-prominent pool-info-sign-compact rotate-[2.5deg]"
          role="status"
        >
          <p className="label font-bold text-accent-surface">Pool Info</p>
          <p className="pool-info-sign-message mt-2 font-bold leading-snug text-ocean-deep">
            {poolInfo.message}
          </p>
        </div>

        <div className="pool-info-rope" aria-hidden="true">
          <span className="pool-info-rope-line" />
          <span className="pool-info-rope-hook" />
        </div>

        <Image
          src="/ocean/objects/buoy.svg"
          alt=""
          width={600}
          height={600}
          className="pool-info-buoy-image relative z-10 -mt-0.5 h-auto drop-shadow-[0_12px_28px_rgba(10,61,98,0.16)]"
        />
      </div>
    </div>
  );
}
