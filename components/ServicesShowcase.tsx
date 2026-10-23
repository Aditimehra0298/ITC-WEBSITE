"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { showcaseMenu, showcaseServices } from "@/lib/services";

export default function ServicesShowcase() {
  const [active, setActive] = useState("electrical");
  const data = showcaseServices[active];

  return (
    <section className="section-one" id="section-1">
      <div className="section-one-inner">
        <div className="so-left">
          <p className="so-eyebrow">ISO/IEC 17025 | NABL ACCREDITED TESTING LABORATORY</p>
          <h2 className="so-title">
            Comprehensive Testing Solutions
            <br />
            <span>You Can Trust</span>
          </h2>
          <p className="so-desc">
            End-to-end testing for electrical, electronic, mechanical, medical, lighting, environmental and
            industrial products — backed by technical competence and quality-focused processes.
          </p>

          <nav className="so-menu" aria-label="Testing services">
            {showcaseMenu.map((item) => {
              const isActive = item.key === active;
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`so-item${isActive ? " is-active" : ""}`}
                  onClick={() => setActive(item.key)}
                >
                  <span className="so-item-ico" aria-hidden="true" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <span>{item.label}</span>
                  <span className="so-chev" aria-hidden="true">
                    {isActive ? "→" : "›"}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <article className="so-panel" id="so-panel">
          <Image
            className="so-panel-img"
            src={data.img}
            alt=""
            fill
            sizes="(max-width: 980px) 100vw, 60vw"
            key={data.img + active}
          />
          <div className="so-panel-overlay" />
          <div className="so-panel-content">
            <p className="so-panel-kicker">
              {data.num} —— {data.name}
            </p>
            <h2 className="so-panel-title">{data.title}</h2>
            <p className="so-panel-desc">{data.desc}</p>
            <ul className="so-checks">
              {data.checks.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="so-panel-actions">
              <Link className="btn btn-primary" href={data.href}>
                Explore {data.name} <span aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn-ghost-light" href="#section-1">
                View All Services
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
