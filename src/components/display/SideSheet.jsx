import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

const SideSheet = ({ body, triggerLabel, title, description, type }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {type === 'button' ? (
          <Button>{triggerLabel}</Button>
        ) : (
          <Button
            role="menuitem"
            variant="outline border-none"
            className="w-full flex cursor-default font-normal justify-start select-none items-center hover:bg-gray-100 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            {triggerLabel}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription className="pb-4">{description}</SheetDescription>
        </SheetHeader>
        {body}
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
