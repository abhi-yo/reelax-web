"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Reelax has completely transformed my browsing habits. The gentle reminders help me take breaks before I fall into endless scrolling.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "Product Designer",
  },
  {
    text: "Finally, a tool that doesn't block everything but helps me be more mindful. The setup was instant and it just works.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Mike Rodriguez",
    role: "Software Engineer",
  },
  {
    text: "I love how Reelax respects my privacy. No accounts, no tracking - just gentle nudges when I need them most.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    name: "Emily Johnson",
    role: "Marketing Manager",
  },
  {
    text: "The minimalist approach is perfect. It doesn't get in my way but helps me stay focused on what matters.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    name: "David Park",
    role: "Freelance Writer",
  },
  {
    text: "Reelax helped me break my doomscrolling habit without feeling restrictive. It's like having a mindful friend.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Content Creator",
  },
  {
    text: "Simple, effective, and respects my autonomy. This is exactly what I needed to build better digital habits.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    name: "Jennifer Walsh",
    role: "UX Researcher",
  },
  {
    text: "The gentle friction approach works perfectly. I'm more intentional about my browsing now without feeling restricted.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    name: "Alex Kumar",
    role: "Digital Marketer",
  },
  {
    text: "No complex setup, no overwhelming features. Reelax does one thing really well and I appreciate that simplicity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    name: "Rachel Martinez",
    role: "Startup Founder",
  },
  {
    text: "This extension helped me regain control over my time online. The mindful breaks make such a difference.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
    name: "James Wilson",
    role: "Student",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
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
                <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm max-w-xs w-full" key={i}>
                  <div className="text-[14px] leading-[1.6] text-black/80 dark:text-white/80">{text}</div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-[14px] text-black dark:text-white">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-[13px] text-black dark:text-white">{role}</div>
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
            <div className="border border-black/10 py-1 px-4 rounded-lg text-[13px] text-black/70">Testimonials</div>
          </div>

          <h2 className="font-serif-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-normal mt-5">
            Loved by mindful browsers
          </h2>
          <p className="text-center mt-5 opacity-75">
            See how Reelax is helping people build better digital habits.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
