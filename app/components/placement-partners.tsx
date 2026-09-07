import Image from "next/image";
import { placementPartners } from "./placement-partners-data";

type PlacementPartnersProps = {
  compact?: boolean;
  showHeading?: boolean;
};

export function PlacementPartners({ compact = false, showHeading = true }: PlacementPartnersProps) {
  const logos = [...placementPartners, ...placementPartners];

  return (
    <section
      className={`placement-partners${compact ? " placement-partners--compact" : ""}`}
      aria-label="Placement partner organisations"
    >
      {showHeading && !compact ? (
        <div className="placement-partners-heading">
          <p className="eyebrow">Placement partners</p>
          <h2>Employers who trust our learners.</h2>
          <p>
            Our graduates and placed candidates join leading national and global brands across retail,
            manufacturing, electronics and services.
          </p>
        </div>
      ) : null}
      <div className="placement-partners-marquee">
        <div className="placement-partners-track">
          {logos.map((partner, index) => (
            <figure className="placement-partner-logo" key={`${partner.name}-${index}`}>
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={180}
                height={90}
                sizes="140px"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
