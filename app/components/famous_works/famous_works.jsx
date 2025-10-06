import Link from "next/link";
import Card from "../card/card";

export default function FamousWorks() {
  return (
    <>
      <div className="flex flex-col items-center gap-[30px] self-stretch">
        <h2 className="self-stretch text-[var(--Text,#333)] text-center text-[56px] not-italic font-medium leading-normal">
          Famous Works
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                gap-y-5 gap-x-6 self-stretch
                px-4 sm:px-6 lg:px-8 mx-auto"
        >
          <Card
            imgSrc={"/pictures/My Neighbor Totoro.jpg"}
            imgAlt={"My Neighbor Totoro"}
            title={"My Neighbor Totoro"}
            subtitle={"1988"}
            summary={
              "A whimsical, heartwarming tale of two sisters exploring a magical countryside."
            }
            link={"/work/my-neighbor-totoro"}
          />
          <Card
            imgSrc={"/pictures/Princess Mononoke.jpg"}
            imgAlt={"Princess Mononoke"}
            title={"Princess Mononoke"}
            subtitle={"1997"}
            summary={
              "An epic story about the clash between humans and nature spirits."
            }
            link={"/work/princess-mononoke"}
          />
          <Card
            imgSrc={"/pictures/Spirited Away.jpg"}
            imgAlt={"Spirited Away"}
            title={"Spirited Away"}
            subtitle={"2001"}
            summary={
              "Academy Award-winning adventure of a young girl navigating a mystical world to save her parents."
            }
            link={"/work/spirited-away"}
          />
          <Card
            imgSrc={"/pictures/Howl’s Moving Castle.jpg"}
            imgAlt={"Howl's Moving Castle"}
            title={"Howl’s Moving Castle"}
            subtitle={"2004"}
            summary={
              "A visually stunning fantasy about a woman cursed with aging, finding love and adventure in a magical moving castle."
            }
            link={"/work/howls-moving-castle"}
          />
        </div>
      </div>
    </>
  );
}
