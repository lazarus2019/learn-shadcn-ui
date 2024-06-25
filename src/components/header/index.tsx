import { headerMock } from '@/__mocks__/db/services-mock';
import { apiEndpoints } from '@/configs/common';
import { useEffect, useState } from 'react';
import { HeaderItem, baseHeaderConfig } from './config';
import { getAPIData, getHeaderConfig } from './helpers';
import { Link } from 'react-router-dom';

function Header() {
  const [data, setData] = useState<HeaderItem[]>([]);
  // const configHeader = baseHeaderConfig;
  const apiHeader = headerMock;

  // console.log({ configHeader, apiHeader });

  useEffect(() => {
    getAPIData(apiEndpoints.services, setData);
  }, []);

  // console.log({ data });

  const fetchedData = getHeaderConfig(data ?? []);

  return (
    <>
      <p>Header</p>

      <div className="flex text-left gap-10">
        {apiHeader.map((item) => (
          <HeaderMenuItem key={item.title} item={item} />
        ))}
      </div>

      <p>APIs</p>

      <div className="flex text-left gap-10">
        {fetchedData.map((item) => (
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
  const { title, children, href, isExternalLink } = item;

  const haveChildren = children && children?.length > 0;
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
  const [data, setData] = useState<HeaderItem[]>([]);
  const { title, href, id, hasChildren } = item;

  useEffect(() => {
    if (hasChildren) {
      getAPIData(apiEndpoints.servicesIntroduction, setData, {
        service: id,
      });
    }
  }, []);

  console.log({ categoryData: data });

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

      {hasChildren &&
        data.map((child) => (
          <ServiceIntroductionItem key={child.title} item={child} />
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
