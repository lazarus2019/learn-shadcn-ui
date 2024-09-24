import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { SelectNewsCategory } from './selectCategory';
import { Button } from '@/components/ui/button';

export type TOptions = { label: string; value: string };

const categoryOptions: TOptions[] = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
  {
    label: 'Option 2',
    value: 'option-2',
  },
  {
    label: 'Option 3',
    value: 'option-3',
  },
  {
    label: 'Option 4',
    value: 'option-4',
  },
  {
    label: 'Option 5',
    value: 'option-5',
  },
  {
    label: 'Option 6',
    value: 'option-6',
  },
];

export const NewsList = () => {
  const form = useFormContext();
  const [checkedAll, setCheckedAll] = useState(false);
  const { fields, replace } = useFieldArray({
    name: 'listItems',
    control: form.control,
  });

  const listItems = useWatch({ name: 'listItems' });

  const controlledFields = fields.map((field, index) => ({
    ...field,
    ...listItems[index],
  }));

  const handleCheckedChange = (checked: boolean) => {
    setCheckedAll(checked);
    if (checked) {
      return replace(
        controlledFields.map((field) => ({
          ...field,
          isChecked: true,
        }))
      );
    }

    replace(
      controlledFields.map((field) => ({
        ...field,
        isChecked: false,
        category: '',
      }))
    );
  };

  useEffect(() => {
    if (controlledFields.some((field) => !field.isChecked)) {
      setCheckedAll(false);
    } else {
      setCheckedAll(true);
    }
  }, [controlledFields]);

  console.log(listItems);

  const activeColumnMatches = listItems
    .filter((item) => item.category)
    .map((item) => item.category);

  const generateCategoryOptions = (value: string) => {
    return categoryOptions.reduce<TOptions[]>((acc, option) => {
      // append option when matched value or language code
      if (option.value === value) {
        return [...acc, option];
      }

      // remove option when selected
      if (activeColumnMatches.includes(option.value)) {
        return acc;
      }

      // append the rest option
      return [...acc, option];
    }, []);
  };

  return (
    <div>
      <Checkbox checked={checkedAll} onCheckedChange={handleCheckedChange}>
        Check all
      </Checkbox>
      {fields.map((field, index) => (
        <div key={field.id} className="flex">
          <FormField
            name={`listItems.${index}.isChecked`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(value) => {
                      field.onChange(value);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name={`listItems.${index}.title`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name={`listItems.${index}.description`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name={`listItems.${index}.category`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SelectNewsCategory
                    options={generateCategoryOptions(field.value)}
                    onChange={(value: string) => {
                      form.setValue(`listItems.${index}.category`, value);
                    }}
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            onClick={() => {
              form.setValue(`listItems.${index}.category`, '');
            }}
          >
            Reset category
          </Button>
        </div>
      ))}
    </div>
  );
};
