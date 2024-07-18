import {
  autoPlacement,
  autoUpdate,
  flip,
  inline,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/react';
import { useState } from 'react';

export const usePopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {} = useFloating({
    open: isOpen,
    // strategy: 'absolute', // element's css position
    placement: 'right', // element's position based on the reference element
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate, // auto update position when screen resizing, scroll
    middleware: [
      offset(20), // add distance/margin between reference & floating element
      inline(), // set position relative with client rects 
      shift(),
      flip(),
      autoPlacement(),
      size(),
    ],
  });
};
