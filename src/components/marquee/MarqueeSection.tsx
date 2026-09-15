
interface Props {
  marqueeTexts: string[];
  containerClass: string;
  textContainerClass: string;
  headerClass: string;
  reverse?: boolean;
}
const MarqueeSection = ({
  marqueeTexts,
  containerClass,
  textContainerClass,
  headerClass,
  reverse,
}: Props) => {
  const numberOfMarqueeGroups = 3;
  return (
    <div className={`${containerClass} marquee`}>
      {[...Array(numberOfMarqueeGroups)].map((_, groupIndex) => (
        <div
          className={`${textContainerClass} marquee-group ${reverse ? "opposite" : ""
            }`}
          key={groupIndex}
        >
          {marqueeTexts.map((text, textIndex) => (
            <h1 className={`${headerClass} text`} key={textIndex}>
              {text}
            </h1>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MarqueeSection;
