import { Close, DrawerBodyWrapper, SidebarDrawerContainer } from "./sidebar.style";

type Props = {
  isOpen: boolean;
  onChange: () => void;
};

export default function SidebarDrawer({ isOpen, onChange }: Props) {
  return (
    <SidebarDrawerContainer className={isOpen ? 'open' : 'close'}>
      <DrawerBodyWrapper className={isOpen ? 'open' : 'close'}>
        <div>
          <Close onClick={onChange}>{''}</Close>
          SIdebar drawer
        </div>
      </DrawerBodyWrapper>      
    </SidebarDrawerContainer>
  );
}

