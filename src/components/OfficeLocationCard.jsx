export function OfficeLocationCard(props) {
    return(
        <div
        key={props.index}
        className=" bg-blue-100 bg-opacity-1 rounded-sm shadow-md shadow-slate-400 h-22 w-56 m-2 p-8 px-3 hover:scale-110 hover:translate-x-5  transition-all duration-100  text-center"
        onClick={() => {
          props.setLocation(props.index);
        }}
      >
          <h4 className="text-xl">{props.office.city}</h4><br />
        <address>{props.office.address}</address>
      </div>
    )
}