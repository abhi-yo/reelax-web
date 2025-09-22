"use client";
import React from "react";
import { motion } from "motion/react";

const avatarImages = [
  "/avatars/pfp-1.jpeg",
  "/avatars/pfp-2.webp",
  "/avatars/pfp-3.jpeg",
  "/avatars/pfp-4.jpg",
];

const nameToAvatar: Record<string, string> = {
  "Dominik Hintringer": "/avatars/pfp-1.jpeg",
  "Seth Keddy": "/avatars/pfp-2.webp",
  "Vishal Sharma": "/avatars/pfp-3.jpeg",
  Sidharth: "/avatars/pfp-4.jpg",
};

const testimonials = [
  {
    text: "Looks great 🤩",
    image: "/avatars/pfp-1.jpeg",
    name: "Dominik Hintringer",
    role: "",
  },
  {
    text: "Like the idea",
    image: "/avatars/pfp-2.webp",
    name: "Seth Keddy",
    role: "",
  },
  {
    text: "Nice idea, keep it up 👍",
    image: "/avatars/pfp-3.jpeg",
    name: "Vishal Sharma",
    role: "",
  },
  {
    text: "cool build.",
    image: "/avatars/pfp-4.jpg",
    name: "Sidharth",
    role: "",
  },
  {
    text: "Reelax helped me break my doomscrolling habit without feeling restrictive. It's like having a mindful friend.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Content Creator",
  },
  {
    text: "Simple, effective, and respects my autonomy. This is exactly what I needed to build better digital habits.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    name: "Jennifer Walsh",
    role: "UX Researcher",
  },
  {
    text: "The gentle friction approach works perfectly. I'm more intentional about my browsing now without feeling restricted.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    name: "Alex Kumar",
    role: "Digital Marketer",
  },
  {
    text: "No complex setup, no overwhelming features. Reelax does one thing really well and I appreciate that simplicity.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    name: "Rachel Martinez",
    role: "Startup Founder",
  },
  {
    text: "This extension helped me regain control over my time online. The mindful breaks make such a difference.",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
    name: "James Wilson",
    role: "Student",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
  avatarOffset?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-2xl border border-black/10 bg-white shadow-sm max-w-xs w-full"
                  key={i}
                >
                  <div className="text-[14px] leading-[1.6] text-black/80">
                    {text}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={
                        avatarImages[
                          ((props.avatarOffset || 0) +
                            i +
                            index * props.testimonials.length) %
                            avatarImages.length
                        ]
                      }
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-[14px] text-black">
                        {name}
                      </div>
                      {role ? (
                        <div className="leading-5 opacity-60 tracking-tight text-[13px] text-black">
                          {role}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-black/10 py-1 px-4 rounded-lg text-[13px] text-black/70">
              Testimonials
            </div>
          </div>

          <h2 className="font-serif-display text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-normal mt-5 whitespace-nowrap">
            Loved by mindful browsers
          </h2>
          <p className="text-center mt-5 opacity-75">
            See how Reelax is helping people build better digital habits.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
            avatarOffset={0}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
            avatarOffset={1}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
            avatarOffset={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
