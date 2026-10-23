"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/services";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6500);
    return () => window.clearInterval(id);
  }, [total]);

  const go = (i: number) => setIndex((i + total) % total);

  return (
    <section className="hero-wrap" id="home">
      <div className="hero" aria-roledescription="carousel" aria-label="Featured capabilities">
        <div className="hero-track">
          {heroSlides.map((slide, i) => (
            <article
              key={i}
              className={`hero-slide${i === index ? " is-active" : ""}`}
              data-index={i}
              hidden={i !== index}
            >
              <Image
                className="hero-media"
                src={slide.image}
                alt=""
                fill
                sizes="100vw"
                priority={i === 0}
              />
              <div className="hero-content">
                <p className="hero-eyebrow">{slide.eyebrow}</p>
                {i === 0 ? (
                  <h1
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
                  />
                ) : (
                  <h2
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
                  />
                )}
                <p className="hero-desc">{slide.desc}</p>
                {slide.meta ? <p className="hero-meta">{slide.meta}</p> : null}
                <div className="hero-actions">
                  <Link className="btn btn-primary" href={slide.primaryHref}>
                    Get a Quote <span aria-hidden="true">→</span>
                  </Link>
                  <Link className="btn btn-outline-navy" href={slide.secondaryHref}>
                    {slide.secondaryLabel}
                  </Link>
                </div>
                {slide.stats ? (
                  <div className="hero-stats">
                    {slide.stats.map((s) => (
                      <div className="hero-stat" key={s.label}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <button
          className="hero-side-arrow hero-prev"
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="hero-side-arrow hero-next"
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="hero-dots" role="tablist" aria-label="Slide navigation">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot${i === index ? " is-active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
