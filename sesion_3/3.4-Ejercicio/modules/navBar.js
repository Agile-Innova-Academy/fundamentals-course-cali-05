export const showNavbar = (container) => {
  container.innerHTML = `
   <nav>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./listar.html">Pokémon</a></li>
        <li><a href="./buscar.html">Buscar</a></li>
      </ul>
    </nav>
`
}