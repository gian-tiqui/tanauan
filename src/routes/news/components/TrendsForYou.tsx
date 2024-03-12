import { Dispatch, SetStateAction } from "react";
import { TagsInterface } from "../News";

interface TrendsProps {
  tags: TagsInterface[];
  setSelectedTag: Dispatch<SetStateAction<TagsInterface>>;
}

const TrendsForYou = ({ tags, setSelectedTag }: TrendsProps) => {
  return (
    <div className="grid gap-2 px-2 text-black">
      {tags.slice(0, 5).map((tag) => (
        <div
          key={tag.id}
          onClick={() => setSelectedTag(tag)}
          className="cursor-pointer"
        >
          <p className="font-bold">{tag.name}</p>
          <p>{tag.count} tags</p>
        </div>
      ))}
    </div>
  );
};

export default TrendsForYou;
