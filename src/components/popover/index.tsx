import { useRef, useState } from 'react';

import {
  useFloating,
  useClick,
  useHover,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  autoUpdate,
  offset,
  flip,
  shift,
  safePolygon,
  FloatingArrow,
  hide,
  arrow,
} from '@floating-ui/react';

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

import classes from './popover.module.scss';

export function Popover() {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    placement: 'right',
    onOpenChange: setIsOpen,
    strategy: 'fixed',
    middleware: [
      offset(20),
      flip(),
      hide(),
      shift({
        padding: {
          top: 40,
          bottom: 20,
        },
      }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  //   const click = useClick(context);
  const hover = useHover(context, {
    delay: { open: 0.25 },
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    // click,
    dismiss,
    role,
    hover,
  ]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={classes['button']}
      >
        Reference element
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              visibility: middlewareData.hide?.referenceHidden
                ? 'hidden'
                : 'visible',
              backgroundColor: 'white',
              color: 'black',
              maxHeight: 500,
              overflowY: 'auto',
              zIndex: 1,
            }}
            {...getFloatingProps()}
          >
            Popover element
            {mockServiceList.map((service, idx) => (
              <div key={`service-${service}`}>
                {service}-{idx}
              </div>
            ))}
          </div>
        </FloatingFocusManager>
      )}

      <div ref={refs.setFloating} style={floatingStyles}>
        <FloatingArrow
          ref={arrowRef}
          context={context}
          fill="white"
          stroke="red"
          width={20}
          height={20}
          tipRadius={2}
          strokeWidth={2}
        />
      </div>
    </>
  );
}
