import UserNavArea from "@/components/AccountNavArea/AccountNavArea";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "account settingd",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={'w-full'}
      >
         <div className='h-[64px] flex items-center border border-neutral-100'>
   Account Settings
    </div>
        <div className="h-[86px] flex items-center">
          <div className='inline-block'>
    <UserNavArea/>
      </div>  
        </div>
        {children}
       </div>
  );
}
