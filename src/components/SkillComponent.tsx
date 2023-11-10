import { Skill } from "@/utils/interfaces";

interface Props {
  value: Skill;
}

function SkillComponent({ value }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-lg sm:text-xl text-gray-200">{value.name}</h4>
      <div className="w-full bg-gray-50 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${value.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillComponent;
