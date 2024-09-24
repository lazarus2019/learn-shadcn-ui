import { FormProvider, useForm } from 'react-hook-form';
import { NewsList } from './newsList';

function NewsPage() {
  const form = useForm({
    defaultValues: {
      listItems: [
        {
          title: 'News 1 title',
          description: 'News 1 description',
          isChecked: false,
          category: '',
        },
        {
          title: 'News 2 title',
          description: 'News 2 description',
          isChecked: false,
          category: 'option-3',
        },
        {
          title: 'News 3 title',
          description: 'News 3 description',
          isChecked: false,
          category: '',
        },
        {
          title: 'News 4 title',
          description: 'News 4 description',
          isChecked: false,
          category: '',
        },
        {
          title: 'News 5 title',
          description: 'News 5 description',
          isChecked: false,
          category: '',
        },
      ],
    },
  });

  return (
    <div>
      NewsPage
      <FormProvider {...form}>
        <NewsList />
      </FormProvider>
    </div>
  );
}

export default NewsPage;

export const loaderNewsPage = () => {};
