import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }:{children: React.ReactNode}) {
    return (
<div className="flex h-screen flex col md:flex-row ">
<div >
    <SideNav />
</div>
<div >
    {children}</div>    
</div>
    );
}