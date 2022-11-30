const DropBox = ({ title, name, id, value, onChange }) => {
  return (
    <div className="col s6">
      <label>{title}</label>
      <select
        defaultValue={value}
        className="browser-default"
        onChange={onChange}
        name={name}
        id={id}
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default DropBox;
