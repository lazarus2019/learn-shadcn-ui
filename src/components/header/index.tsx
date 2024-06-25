import { headerMock } from '@/__mocks__/db/services-mock';
import { apiEndpoints } from '@/configs/common';
import { useEffect, useState } from 'react';
import { HeaderItem, baseHeaderConfig } from './config';
import { getAPIData, getHeaderConfig } from './helpers';
import { Link } from 'react-router-dom';
import {
  useGetCategories,
  useGetCategoryIntroduction,
} from '@/services/category/hook';

function Header() {
  // const { data: queryData, isFetching } = useGetCategories();

  // const [data, setData] = useState<HeaderItem[]>([]);
  // const configHeader = baseHeaderConfig;
  const apiHeader = headerMock;

  // console.log({ configHeader, apiHeader });

  // useEffect(() => {
  //   getAPIData(apiEndpoints.services, setData);
  // }, []);

  // console.log({ data });

  const fetchedData = getHeaderConfig([]);

  return (
    <>
      <p>Header</p>

      {/* <div className="flex text-left gap-10">
        {apiHeader.map((item) => (
          <HeaderMenuItem key={item.title} item={item} />
        ))}
      </div> */}

      <p>APIs</p>

      <div className="flex text-left gap-10">
        {baseHeaderConfig.map((item) => (
          <HeaderMenuItem key={item.title} item={item} />
        ))}
      </div>
    </>
  );
}

export default Header;

type ItemProps = {
  item: HeaderItem;
};

function HeaderMenuItem({ item }: ItemProps) {
  const { title, children, href, isExternalLink, hasChildren } = item;

  const haveChildren = children && children?.length > 0;

  const { data: queryData, isFetching } = useGetCategories(
    { title },
    {
      enabled: hasChildren === true,
    }
  );
  const isDataReady = !isFetching && queryData?.data;

  return (
    <div>
      {href ? (
        <Link to={href}>
          {title}
          <span className="text-sky-500">- href</span>
        </Link>
      ) : (
        <span>{title}</span>
      )}

      {haveChildren &&
        children.map((child) => (
          <CategoryItem key={child.title} item={child} />
        ))}
      {isFetching && 'Loading...'}
      {isDataReady &&
        queryData?.data.map((item) => (
          <CategoryItem key={item.title} item={item} />
        ))}
    </div>
  );
}

function CategoryItem({ item }: ItemProps) {
  const { title, children, href } = item;
  const haveChildren = children && children?.length > 0;

  return (
    <div className="pl-8">
      {href ? (
        <Link to={href}>
          {title} <span className="text-sky-500">- href</span>
        </Link>
      ) : (
        <span>{title}</span>
      )}

      {haveChildren &&
        children.map((child) => <ServiceItem key={child.title} item={child} />)}
    </div>
  );
}

function ServiceItem({ item }: ItemProps) {
  const { title, href, id, hasChildren } = item;
  const { data: queryData, isFetching } = useGetCategoryIntroduction(
    { service: id },
    {
      enabled: hasChildren === true,
    }
  );
  const isDataReady = !isFetching && queryData?.data;

  console.log({ queryData });

  return (
    <div className="pl-8">
      {href ? (
        <Link to={href}>
          {title}
          <span className="text-sky-500">- href</span>
        </Link>
      ) : (
        <span>{title}</span>
      )}

      {hasChildren && '>>>'}
      {isFetching && 'Loading...'}

      {isDataReady &&
        queryData?.data.map((item) => (
          <ServiceIntroductionItem key={item.title} item={item} />
        ))}
    </div>
  );
}

function ServiceIntroductionItem({ item }: ItemProps) {
  const { title, href } = item;

  return (
    <div className="pl-8">
      {href ? (
        <Link to={href}>
          {title}
          <span className="text-sky-500">- href</span>
        </Link>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
}
