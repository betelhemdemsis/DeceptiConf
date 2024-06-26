import React from "react";
import bg1 from "../images/background.6c3571e0.jpg";
export default function Hero() {
  return (
    <div>
      <section class="relative pb-20 pt-10 sm:py-24">
        <div class="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
          <img
            alt="images"
            fetchpriority="high"
            width="918"
            height="1495"
            decoding="async"
            data-nimg="1"
            class="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
            style={{ color: "transparent" }}
            src={bg1}
          />
          <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 class="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
              <span class="sr-only">DeceptiConf - </span>A design conference for
              the dark side.
            </h1>
            <div class="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
              <p>
                The next generation of web users are tech-savvy and suspicious.
                They know how to use dev tools, they can detect a phishing scam
                from a mile away, and they certainly aren’t accepting any checks
                from Western Union.
              </p>
              <p>
                At DeceptiConf you’ll learn about the latest dark patterns being
                developed to trick even the smartest visitors, and you’ll learn
                how to deploy them without ever being detected.
              </p>
            </div>
            <a
              class="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 mt-10 w-full sm:hidden"
              href="#"
            >
              Get your tickets
            </a>
            <dl class="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              <div>
                <dt class="font-mono text-sm text-blue-600">Speakers</dt>
                <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  18
                </dd>
              </div>
              <div>
                <dt class="font-mono text-sm text-blue-600">
                  People Attending
                </dt>
                <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  2,091
                </dd>
              </div>
              <div>
                <dt class="font-mono text-sm text-blue-600">Venue</dt>
                <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  Staples Center
                </dd>
              </div>
              <div>
                <dt class="font-mono text-sm text-blue-600">Location</dt>
                <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  Los Angeles
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
