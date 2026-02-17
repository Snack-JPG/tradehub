"use client";


import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Jayne Orton",
      rating: 5,
      text: "Needed an emergency plumber over the weekend for a problem toilet. Rang loads but Chris was the only one who answered the phone. He came out on a Sunday exactly when he said even ringing half an hour before he got to me to let me know he was on his way. Sorted the problem promptly and efficiently",
      highlight: "Only one who answered the phone",
    },
    {
      name: "Random Brummy",
      rating: 5,
      text: "Chris was a life saver. My boiler totally packed up and I had water leaking. Called this bloke and he not only came straight away but he sorted it all out quickly and for a great price. Friendly, knowledgeable and knew exactly what he was doing. Highly recommended 👌",
      highlight: "Came straight away",
    },
    {
      name: "Cara Wallace",
      rating: 5,
      text: "Great problem solving to fix my boiler thanks again Chris.",
      highlight: "Great problem solving",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-navy-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            5.0 Rating on Google
          </h2>
          <p className="text-xl text-navy-600">
            Here's what customers say about Chris and Brum Heat and Plumb
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-navy-100 hover:border-emergency-300 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-navy-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-navy-700 leading-relaxed mb-4 relative z-10">
                "{review.text}"
              </p>

              {/* Highlight badge */}
              <div className="inline-block bg-emergency-100 text-emergency-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {review.highlight}
              </div>

              {/* Reviewer name */}
              <div className="font-bold text-navy-800">{review.name}</div>
              <div className="text-sm text-navy-500">Google Review</div>
            </div>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div
          className="text-center"
        >
          <a
            href="https://maps.google.com/?cid=16286825322165907960"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy-700 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-bold transition-colors"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            Read All 25 Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
