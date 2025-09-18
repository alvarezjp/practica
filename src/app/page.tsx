import SectionPage, { Color } from "@/Components/EstructurasParaComponentes/SectionPage";
import NavBar4ParaLink from "@/Components/Nabvars/NavBar4ParaScroll";
import Navbar3 from "@/Components/Nabvars/NavbarParaEjSection/Navbar3";
import FrontStrapi from "@/Components/ParaStrapi/FrontStrapi";

interface PropsSectionPage{
  name:string,
  id:string,
  color:Color
}

const objSectionPage:PropsSectionPage[] = [
{name:"primero",id:"1",color:'red'},
{name:"segundo",id:"2",color:'blue'},
{name:"tercero",id:"3",color:'yellow'},
{name:"cuarto",id:"4",color:'green'},
{name:"quinto",id:"5",color:'purple'},
]

export default function Home() {
  return (
    <div className="bg-black relative h-full">
     {/* <Building/> */}
     {/* <Navbar1/> */}
     {/* <Navbars2/> */}
     {/* <Navbar3/> */}
     {/* <NavBar4ParaLink/> */}
     {/* {objSectionPage.map((items) => (
     <SectionPage name={items.name} id={items.id} typeColor={items.color} />
    ))} */}
    <FrontStrapi/>
    </div>
  );
}
