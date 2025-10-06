export default function About() {
  return (
    <>
      <div className="flex flex-col items-center gap-[30px] self-stretch justify-center mx-auto">
        <h2 className="self-stretch text-[var(--Text,#333)] text-center text-[56px] not-italic font-medium leading-normal">
          About
        </h2>
        <p className="max-w-[1000px] self-stretch text-[var(--Text,#333)] text-center text-base not-italic font-normal leading-normal">
          Hayao Miyazaki is a Japanese filmmaker, animator, and co-founder of
          Studio Ghibli. Celebrated for his hand-drawn animation, he creates
          films with richly imagined worlds, strong characters, and stories that
          captivate audiences of all ages. His work often explores nature,
          environmentalism, pacifism, childhood wonder, and resilient female
          protagonists.
        </p>
      </div>
    </>
  );
}
