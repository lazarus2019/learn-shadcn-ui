import {
  autoPlacement,
  autoUpdate,
  inline,
  flip,
  offset,
  shift,
  hide,
  safePolygon,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

/** 
 * strategy: 'absolute' // floating element's css position
 * placement: 'right' // floating element's position based on the reference element
 * whileElementsMounted: autoUpdate // auto update position when screen resizing, scroll
 * offset(20) // [placement] add distance/margin between reference & floating element
 * inline() // [placement] set position relative with client rects
 * shift({padding: {top:40, bottom: 20}}) // [visibility] keep floating element stay in view, can add spacing around
 * flip() // [visibility] keep floating element stay in view by flipping it to opposite
 * autoPlacement() // [visibility]
 * size() // [visibility] resize floating element not overflow a clipping container or match the reference
 * arrow({ element: arrowRef }) // [data] place box centered reference
 * hide() // [data] hide floating element when reference not in view
 * elements: {
        reference: referenceRef,
        floating: floatingRef,
    } // config alternative refs
 * **/

// eslint-disable-next-line react-refresh/only-export-components
export const usePopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context, floatingStyles, middlewareData } = useFloating({
    open: isOpen,
    // strategy: 'absolute',
    placement: 'right',
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(20),
      inline(),
      shift({ padding: { top: 40, bottom: 20 } }),
      hide(),
        // flip(),
      autoPlacement(),
      //   size(),
      //   arrow({ element: arrowRef }), //
    ],
    // elements: {
    //     reference: referenceRef,
    //     floating: floatingRef,
    // }
  });

  const hover = useHover(context, {
    delay: { open: 0.25 },
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });

  const dismiss = useDismiss(context);

  //   const role = useRole(context); // apply aria props to floating & reference element to accessible
  //   const dismiss = useDismiss(context); // handle close floating element when finish interacting, support escape key

  const interactions = useInteractions([hover, dismiss]);

  return {
    isOpen,
    setIsOpen,
    interactions,
    refs,
    floatingStyles,
    middlewareData,
    context,
  };
};

type PopoverContextType = ReturnType<typeof usePopover>;

const PopoverContext = createContext<PopoverContextType | null>(null);

export const Popover = ({ children }: PropsWithChildren) => {
  const popover = usePopover();

  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (context) return context;

  throw new Error('usePopoverContext must be use within Popover');
};
