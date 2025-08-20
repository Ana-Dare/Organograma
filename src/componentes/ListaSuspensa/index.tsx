import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  aoAlterado: (id: string) => void
  label: string
  valor: string
  obrigatorio: boolean
  itens:string[]
  type?: string
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value=''></option>
        {(props.itens || []).map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
