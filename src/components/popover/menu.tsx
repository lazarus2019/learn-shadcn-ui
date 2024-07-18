import { MenuItem } from './menu-item';

import classes from './menu.module.scss';

export const Menu = () => {
  return (
    <div className={classes['menu-wrapper']}>
      {Array(5)
        .fill({})
        .map((_, idx) => (
          <MenuItem key={idx} idx={idx} />
        ))}
    </div>
  );
};
