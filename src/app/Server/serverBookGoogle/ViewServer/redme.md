- Se utiliza el componente infiniteScroll para cargar datos al realizar el scroll
-Para realizar una carga previa desde el servidor de hace un wrapper para que no alla problemas de hidratacion de datos desde el servidor de next.
- al utilizar useClient , por  estar ocupando en el view useState , no podemos realizar ahi la pedida de datos desde el servidor , por eso el wraper lo hace
y luego de esta manera se lo envia a nuestro componente view para que los cargue , asi evitamos problemas de datos cargados desde el servidor y los otros c
como lo son del scroll que deben ser desde el navegador.