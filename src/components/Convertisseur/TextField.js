const TextField = ({ value, onChange, validAmount }) => (
  <div className="input-field col s12">
    <input
      id="amount"
      type="text"
      className={validAmount ? "valid" : "invalid"}
      value={value}
      onChange={onChange}
    />
    <span
      className="helper-text"
      data-error="Erreur"
      data-success="Valide"
    ></span>
    <label htmlFor="amount">Montant</label>
  </div>
);
export default TextField;
