Este Navbar lo utilizamos para poder navegar y avanzar a los distintos elementos de la landing.

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

 {objSectionPage.map((items) => (
     <SectionPage name={items.name} id={items.id} typeColor={items.color} />
    ))}

    Lo que se genero para poder usarlo.
