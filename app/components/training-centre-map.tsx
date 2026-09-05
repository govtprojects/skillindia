const branch = {
  label: "Sheragada branch",
  address: "Block Office, Sheragada, Odisha 761106",
  mapQuery: "Block Office, Sheragada, Odisha 761106",
};

export function TrainingCentreMap() {
  return <section className="section training-map-section" aria-labelledby="training-map-heading">
    <div className="training-map-heading">
      <div><p className="eyebrow">Find your way</p><h2 id="training-map-heading" className="section-heading">Locate the centre.</h2></div>
    </div>
    <div className="training-map-grid"><article className="training-map-card"><div><span>Training centre</span><h3>{branch.label}</h3><p>{branch.address}</p></div><div className="training-map"><iframe title="Sheragada branch location map" src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(branch.mapQuery)}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></article></div>
  </section>;
}
