import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TOptions } from './newsList';

interface SelectNewsCategoryProps {
  options: TOptions[];
  onChange: (value: string) => void;
  value: string;
}

export const SelectNewsCategory = ({
  options,
  onChange,
  value,
}: SelectNewsCategoryProps) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <div className="relative flex w-full">
        <SelectTrigger>
          <SelectValue className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" />
        </SelectTrigger>
      </div>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem value={value} key={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
