"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type NewsCategory = "Event" | "Press" | "Award" | "Workshop";

type NewsItem = {
  id: string;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
  story: string;
  tags: string[];
  image: string;
  alt: string;
  featured?: boolean;
};

const filters = ["All Updates", "Events", "Press Coverage", "Awards & Recognition", "Workshops"] as const;

const activity = (file: string) => `/balvidyalay/activity/${file}`;

const news: NewsItem[] = [
  {
    id: "annual-function",
    category: "Award",
    date: "21 December 2025",
    title: "Annual Function Celebrations 2025 — trophies and certificates on stage",
    excerpt: "Children received trophies and framed certificates at Bal Vidyalaya’s Annual Function, a proud evening of performance, recognition and family celebration in Sheragada.",
    story: "The Annual Function Celebrations 2025 brought the school onto a decorated outdoor stage. Learners stepped forward with certificates and trophies, joined by teachers and guests, while the banner behind them marked a night of song, costume and achievement. It is the moment the year’s small classroom steps become a public celebration.",
    tags: ["Annual Function", "Sheragada", "Recognition"],
    image: activity("WhatsApp Image 2026-09-03 at 4.54.46 PM.jpeg"),
    alt: "Children holding trophies and certificates on stage at Bal Vidyalaya Annual Function Celebrations 2025",
    featured: true,
  },
  {
    id: "sports-day",
    category: "Event",
    date: "Sports Day",
    title: "Annual Sports Day — balance, flags and outdoor play",
    excerpt: "Sports Day filled the courtyard with house colours, flags and games. Children balanced cups, raced and cheered one another on under the Bal Vidyalaya banner.",
    story: "Annual Sports Day at Bal Vidyalaya, Sheragada turned the paved courtyard into a playground of focus and fun. Children in green sports kits lined up for cup-balance games beside the school van, with bright flags marking the course. Movement, teamwork and laughter sat at the centre of the day.",
    tags: ["Sports Day", "Outdoor play"],
    image: activity("WhatsApp Image 2026-09-03 at 4.54.31 PM.jpeg"),
    alt: "Children balancing paper cups during Annual Sports Day at Bal Vidyalaya Sheragada",
  },
  {
    id: "independence-day",
    category: "Event",
    date: "15 August",
    title: "Independence Day — flag, rangoli and a circle on the terrace",
    excerpt: "On 15 August the school gathered on the terrace around the national flag, with a hand-drawn rangoli in saffron, white and green at the foot of the pole.",
    story: "Independence Day at Bal Vidyalaya was marked with flag hoisting on the terrace. Staff and learners stood in a wide circle, many holding small flags, while a peacock rangoli in tricolour sat at the base of the pole. The day mixed ceremony and pride: colour under an open sky, and a shared song around the Tiranga.",
    tags: ["Independence Day", "Flag hoisting"],
    image: "/ind11 (37).jpeg",
    alt: "Independence Day gathering around the Indian flag and rangoli on the terrace",
  },
  {
    id: "teachers-day",
    category: "Event",
    date: "5 September",
    title: "Teacher’s Day — lamp lighting in honour of Dr. Radhakrishnan",
    excerpt: "Students sat together as staff lit the ceremonial lamp before a portrait of Dr. Sarvepalli Radhakrishnan, opening Teacher’s Day with gratitude.",
    story: "Teacher’s Day began with Deep Prajjwalan. A framed portrait of Dr. Radhakrishnan, marigold garlands and the shloka on the chalkboard set a respectful tone, while children in uniform watched from the floor. The day honoured the educators who make Bal Vidyalaya a place of care and curiosity.",
    tags: ["Teacher’s Day", "Guru Vandana"],
    image: activity("WhatsApp Image 2026-09-03 at 4.42.17 PM.jpeg"),
    alt: "A teacher lighting a lamp on Teacher’s Day as Bal Vidyalaya children watch",
  },
  {
    id: "morning-assembly",
    category: "Event",
    date: "Everyday",
    title: "Morning assembly — prayer, stillness and a shared start",
    excerpt: "Rows of children in yellow, red and green sit together with hands folded, beginning the school day in a calm, shared assembly.",
    story: "Each day at Bal Vidyalaya starts on the hall floor. House colours line up, ID cards rest on small chests, and teachers stand at the back as children close their eyes or join their palms. The assembly is simple: a moment of togetherness before play, stories and learning begin.",
    tags: ["Assembly", "Daily life"],
    image: activity("WhatsApp Image 2026-09-03 at 4.41.23 PM.jpeg"),
    alt: "Children sitting in rows with hands folded during morning assembly",
  },
  {
    id: "raksha-bandhan",
    category: "Event",
    date: "Festival",
    title: "Raksha Bandhan in class — tying rakhis, learning care",
    excerpt: "Children tied colourful rakhis on one another’s wrists, practising kindness, patience and the festival’s message of protection.",
    story: "Raksha Bandhan came into the classroom as a hands-on festival. Learners in red uniforms gathered around threads and ornaments, helping one another tie rakhis. The activity mixed culture with social learning: taking turns, looking after a friend, and celebrating belonging.",
    tags: ["Raksha Bandhan", "Festival"],
    image: activity("WhatsApp Image 2026-09-03 at 4.41.50 PM.jpeg"),
    alt: "Children tying rakhis on each other’s wrists in a Bal Vidyalaya classroom",
  },
  {
    id: "competition-certificates",
    category: "Award",
    date: "Competition day",
    title: "Certificates of competition — celebrating every participant",
    excerpt: "Learners posed with Certificates of Competition beside teachers, after a day of contests that valued effort as much as winning.",
    story: "After school competitions, children received Certificates of Competition printed with the Bal Vidyalaya mark. Sitting on colourful foam mats with small flags nearby, they posed with their teachers. Recognition here is wide: courage to take part, pride in finishing, and a paper to take home.",
    tags: ["Certificates", "Competition"],
    image: activity("WhatsApp Image 2026-09-03 at 4.55.10 PM.jpeg"),
    alt: "Bal Vidyalaya students and teachers with certificates of competition",
  },
  {
    id: "flag-hoisting",
    category: "Event",
    date: "National day",
    title: "Flag hoisting with rangoli — a patriotic gathering on the terrace",
    excerpt: "Staff and learners stood in a circle around the national flag, with a hand-drawn rangoli at the base of the pole.",
    story: "A flag-hoisting gathering brought the school onto the terrace. The Tiranga rose above a rangoli in saffron, white and green, while people held small flags and sang together. National days at Bal Vidyalaya are lived, not only told: colour, ceremony and a shared circle.",
    tags: ["Flag hoisting", "National festival"],
    image: activity("WhatsApp Image 2026-09-03 at 4.55.04 PM.jpeg"),
    alt: "Group standing around the Indian flag during a hoisting ceremony with rangoli",
  },
  {
    id: "prerana",
    category: "Award",
    date: "PRERANA",
    title: "PRERANA cultural fest — folk costume, dance and prizes",
    excerpt: "Students in traditional dance dress and folk masks received PRERANA certificates and trophies for their cultural performances.",
    story: "At the PRERANA programme, Bal Vidyalaya children presented folk dance and costume. Several returned with certificates and small trophies, standing with teachers in front of the event banner. The outing connected classroom culture to a wider stage of arts and recognition.",
    tags: ["PRERANA", "Folk arts"],
    image: activity("WhatsApp Image 2026-09-03 at 4.54.15 PM.jpeg"),
    alt: "Children in traditional costumes holding PRERANA certificates and trophies",
  },
  {
    id: "sack-race",
    category: "Event",
    date: "Sports Day",
    title: "Sack race on Sports Day — hops, chalk lines and cheers",
    excerpt: "Five children stood in burlap sacks on the starting line, waiting for the whistle on a sunny Sports Day afternoon.",
    story: "The sack race is a Sports Day favourite. Learners stepped into rice sacks, held the rims at their waists and lined up on chalk marks while the yellow Bal Vidyalaya van waited in the trees behind them. It is clumsy, comic and brave — exactly the kind of play that builds confidence.",
    tags: ["Sack race", "Sports Day"],
    image: activity("WhatsApp Image 2026-09-03 at 4.54.36 PM.jpeg"),
    alt: "Children lined up in burlap sacks for a race on Sports Day",
  },
  {
    id: "independence-staff-dance",
    category: "Workshop",
    date: "15 August",
    title: "Independence Day staff performance — tricolour sarees on the floor",
    excerpt: "Educators rehearsed and performed a group dance in tricolour sarees, showing children that celebration belongs to the whole school family.",
    story: "Alongside the children’s cultural programme, staff offered their own Independence Day performance. Lined in white sarees banded with saffron and green, they danced before a Happy Independence Day banner. The workshop-like rehearsal — timing, formation, courage — is part of how the school prepares festive days together.",
    tags: ["Staff", "Independence Day"],
    image: activity("WhatsApp Image 2026-09-03 at 4.54.42 PM (1).jpeg"),
    alt: "Educators dancing in tricolour sarees at the Independence Day celebration",
  },
  {
    id: "movement-workshop",
    category: "Workshop",
    date: "In school",
    title: "Movement workshop — teachers lead, children follow",
    excerpt: "In the hall, instructors demonstrated stretches and steps while a class in yellow polos copied the actions in rows.",
    story: "A movement session filled the white-walled hall. Two educators at the front bent into a demonstration; children in yellow house kits copied the shape. Physical literacy here is playful instruction: watch, try, laugh, try again. It is workshop learning in the most natural form.",
    tags: ["Movement", "Teacher-led"],
    image: activity("WhatsApp Image 2026-09-03 at 4.41.33 PM.jpeg"),
    alt: "Teachers leading children in a movement activity in the school hall",
  },
  {
    id: "campus-group",
    category: "Press",
    date: "Campus day",
    title: "Bal Vidyalaya family portrait — children, staff and the school porch",
    excerpt: "A full-school photograph on the courtyard steps captured house colours, teachers and the Sheragada campus in one frame.",
    story: "The campus group photograph is how Bal Vidyalaya presents itself to visiting partners and the wider community. Children in green, yellow and khaki gathered before the peach-coloured building, with staff on the porch and a Skilled in Odisha board above the door. It is a picture of a living school, ready to be shared.",
    tags: ["Campus", "Sheragada"],
    image: activity("WhatsApp Image 2026-09-03 at 4.41.38 PM.jpeg"),
    alt: "Group photograph of Bal Vidyalaya children and staff in front of the school building",
  },
  {
    id: "ramayana-play",
    category: "Event",
    date: "Cultural day",
    title: "Classroom Ramayana — bow, arrow and a story on the mats",
    excerpt: "Two children acted Rama and Ravana on colourful foam mats, bringing an epic into everyday playful learning.",
    story: "Drama is part of the Bal Vidyalaya week. On the foam mats, one child in saffron drew a toy bow while another in gold armour lay as Ravana. Wall murals saying I can do it watched over the scene. Stories become muscle memory: costume, gesture, courage to perform for friends.",
    tags: ["Drama", "Ramayana"],
    image: activity("WhatsApp Image 2026-09-03 at 4.42.06 PM.jpeg"),
    alt: "Two children performing a Ramayana scene with a bow and costume in class",
  },
];

const categoryForFilter: Record<(typeof filters)[number], NewsCategory | "all"> = {
  "All Updates": "all",
  Events: "Event",
  "Press Coverage": "Press",
  "Awards & Recognition": "Award",
  Workshops: "Workshop",
};

export function BalNews() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All Updates");
  const [openId, setOpenId] = useState<string | null>(null);
  const [visible, setVisible] = useState(6);

  const featured = news.find((item) => item.featured) ?? news[0];
  const filtered = useMemo(() => {
    const category = categoryForFilter[filter];
    const list = news.filter((item) => !item.featured && (category === "all" || item.category === category));
    if (category !== "all" && featured.category === category) return [featured, ...list];
    return list;
  }, [filter, featured]);

  const shown = filtered.slice(0, visible);
  const showFeatured = filter === "All Updates";

  return (
    <section className="bal-news" id="news-updates">
      <div className="section">
      <div className="bal-news-heading">
        <div>
          <p className="eyebrow">Stay informed</p>
          <h2>News &amp; Updates</h2>
        </div>
        <p>Events, workshops, recognition and stories from everyday life at Bal Vidyalaya School, Sheragada.</p>
      </div>

      <div className="bal-news-filters" role="tablist" aria-label="Filter news">
        {filters.map((label) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={filter === label}
            className={filter === label ? "is-active" : ""}
            onClick={() => { setFilter(label); setVisible(6); setOpenId(null); }}
          >
            {label}
          </button>
        ))}
      </div>

      {showFeatured && (
        <article className="bal-news-feature">
          <div className="bal-news-feature-image">
            <Image className="bal-photo" src={featured.image} alt={featured.alt} fill sizes="(max-width: 900px) 100vw, 52vw" quality={90} />
          </div>
          <div className="bal-news-feature-copy">
            <div className="bal-news-meta">
              <span>{featured.category === "Press" ? "Press Coverage" : featured.category}</span>
              <time>{featured.date}</time>
            </div>
            <p className="eyebrow">Featured story</p>
            <h3>{featured.title}</h3>
            <p>{openId === featured.id ? featured.story : featured.excerpt}</p>
            <ul className="bal-news-tags">
              {featured.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <button type="button" className="bal-news-more" onClick={() => setOpenId(openId === featured.id ? null : featured.id)}>
              {openId === featured.id ? "Show less" : "Read full story"} <span>→</span>
            </button>
          </div>
        </article>
      )}

      <div className="bal-news-grid">
        {shown.map((item) => (
          <article key={item.id} className={`bal-news-card${openId === item.id ? " is-open" : ""}`}>
            <div className="bal-news-card-image">
              <Image className="bal-photo" src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 32vw" quality={90} />
              <span>{item.category}</span>
            </div>
            <div className="bal-news-card-body">
              <time>{item.date}</time>
              <h3>{item.title}</h3>
              <p>{openId === item.id ? item.story : item.excerpt}</p>
              <button type="button" className="bal-news-more" onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                {openId === item.id ? "Show less" : "Read more"} <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {visible < filtered.length && (
        <button type="button" className="bal-news-load" onClick={() => setVisible((count) => count + 6)}>
          Load more updates
        </button>
      )}
      </div>
    </section>
  );
}
