export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MyTube</a>
      </div>
      <div className="flex-none gap-2">
        <input type="text" placeholder="Buscar..." className="input input-bordered w-64" />
        <button className="btn btn-primary">Buscar</button>
      </div>
    </div>
  );
}

export default Navbar;
