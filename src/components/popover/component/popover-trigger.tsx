import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { usePopoverContext } from '../store';
import { useMergeRefs } from '@floating-ui/react';

type PopoverTriggerProps = ComponentPropsWithoutRef<'button'>;

export const PopoverTrigger = forwardRef<
  ElementRef<'button'>,
  PopoverTriggerProps
>(({ children, ...props }, propRef) => {
  const { interactions, refs } = usePopoverContext();
  const ref = useMergeRefs([refs.setReference, propRef]);

  return (
    <button ref={ref} type="button" {...interactions.getReferenceProps(props)}>
      {children}
    </button>
  );
});
