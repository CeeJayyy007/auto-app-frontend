import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui/separator';

const DrawerComponent = ({
  triggerLabel,
  title,
  description,
  actionLabel,
  body
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          role="menuitem"
          variant="outline border-none"
          className="w-full relative cursor-default font-normal justify-start select-none items-center hover:bg-gray-100 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          {triggerLabel}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="pb-0 pt-4">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription className="mt-0">
              {description}
            </DrawerDescription>
          </DrawerHeader>
          <Separator />
          {body}
          <DrawerFooter className="mb-8 pt-0">
            <DrawerClose asChild>
              <Button variant="outline">{actionLabel}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
