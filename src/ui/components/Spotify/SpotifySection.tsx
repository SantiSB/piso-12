import { SectionWrapper } from '../shared/SectionWrapper.js';

export function SpotifySection() {
  return (
    <SectionWrapper id="playlist" className="bg-void py-16">
      <div className="flex flex-col items-center gap-6 px-6">
        <p className="font-heading tracking-widest text-chrome-dim text-xs text-center uppercase">
          Escucha la playlist
        </p>
        <iframe
          src="https://open.spotify.com/embed/playlist/5sXNgo83CgNHst967NBpva"
          height="152"
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px', width: '100%', maxWidth: '600px' }}
        />
      </div>
    </SectionWrapper>
  );
}
