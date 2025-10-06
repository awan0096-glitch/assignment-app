export default function ArtisticStyle() {
  return (
    <>
      <div className="flex flex-col items-center gap-[30px] self-stretch">
        <h2 className="self-stretch text-[var(--Text,#333)] text-center font-[Alexandria] text-[56px] not-italic font-medium leading-normal">
          Artistic Style
        </h2>
        <h3 className="self-stretch text-[var(--Text,#333)] text-center font-[Alexandria] text-xs not-italic font-medium leading-normal">
          Fantasy · Nature · Emotion
        </h3>
        <p className="max-w-[1000px] self-stretch text-[var(--Text,#333)] text-center text-base not-italic font-normal leading-normal mx-auto">
          Miyazaki’s films are characterized by hand-drawn animation,
          breathtaking landscapes, and characters full of emotion and depth. His
          storytelling blends fantasy and reality, creating timeless films that
          resonate across generations.
        </p>
      </div>
    </>
  );
}
