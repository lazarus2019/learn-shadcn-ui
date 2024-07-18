import { PopoverContent } from './component/popover-content';
import { PopoverTrigger } from './component/popover-trigger';
import { Popover } from './store';

import classes from './menu.module.scss';

const mockServiceList = [
  '20 Minimum Margin',
  'Content',
  'service-category-item',
  'list-service-category-label',
  'list-service-category-separate',
  'list-service-category',
  '20 Minimum Margin-2',
  'Content-2',
  'service-category-item-2',
  'list-service-category-label-2',
  'list-service-category-separate-2',
  'list-service-category-2',
  '20 Minimum Margin-3',
  'Content-3',
  'service-category-item-3',
  'list-service-category-label-3',
  'list-service-category-separate-3',
  'list-service-category-3',
  '20 Minimum Margin',
  'Content',
  'service-category-item',
  'list-service-category-label',
  'list-service-category-separate',
  'list-service-category',
  '20 Minimum Margin-2',
  'Content-2',
  'service-category-item-2',
  'list-service-category-label-2',
  'list-service-category-separate-2',
  'list-service-category-2',
  '20 Minimum Margin-3',
  'Content-3',
  'service-category-item-3',
  'list-service-category-label-3',
  'list-service-category-separate-3',
  'list-service-category-3',
  '20 Minimum Margin',
  'Content',
  'service-category-item',
  'list-service-category-label',
  'list-service-category-separate',
  'list-service-category',
  '20 Minimum Margin-2',
  'Content-2',
  'service-category-item-2',
  'list-service-category-label-2',
  'list-service-category-separate-2',
  'list-service-category-2',
  '20 Minimum Margin-3',
  'Content-3',
  'service-category-item-3',
  'list-service-category-label-3',
  'list-service-category-separate-3',
  'list-service-category-3',
];

export const MenuItem = ({ idx }: { idx: number }) => {
  return (
    <div className={classes['menu-item-wrapper']}>
      <Popover>
        <PopoverTrigger className={classes['menu-item-btn']}>
          Item {idx}
        </PopoverTrigger>
        <PopoverContent className={classes['menu-item-content']}>
          {mockServiceList.map((item, itemIdx) => (
            <div
              key={`${item}-num-${itemIdx}-menu-${idx}`}
              className={classes['submenu-item']}
            >
              {item}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};
