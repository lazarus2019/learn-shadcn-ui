import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { usePopoverContext } from '../store';

export const PopoverContent = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ children, ...props }, propRef) => {
  const {
    context: floatingContext,
    floatingStyles,
    interactions,
    refs,
    middlewareData,
  } = usePopoverContext();
  const ref = useMergeRefs([refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
        <div
          ref={ref}
          style={{
            ...floatingStyles,
            visibility: middlewareData.hide?.referenceHidden
              ? 'hidden'
              : 'visible',
          }}
          {...interactions.getFloatingProps(props)}
        >
          {children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});
