import DropBox from "./DropBox";
import TextField from "./TextField";
import Spinner from "../Spinner/index";
import React, { useState, useEffect } from "react";

const Convertisseur = () => {
  const [valueFrom, setValueFrom] = useState("EUR");
  const [valueTo, setValueTo] = useState("EUR");
  const [valueResult, setValueResult] = useState(0);
  const [valueTaux, setValueTaux] = useState({ isLoading: false, data: {} });
  const [valueTextFild, setValueTextFild] = useState({
    amount: 0,
    validAmount: true
  });
  const { isLoading, data } = valueTaux;
  const { amount, validAmount } = valueTextFild;

  const verifIntRegex = /^[0-9]*\.?[0-9]*$/;
  const replaceRegex = /(^|[^\d.])0+(?!\.)/g;

  useEffect(() => {
    window.M.updateTextFields();

    const fetchConversion = async () => {
      setValueTaux({ isLoading: true });
      const request = await fetch(
        "https://api.currencyapi.com/v3/latest?apikey=Fvs8JkkwMZ8g7reVoLbyrVzOPeDZnFo0rfvTgNIJ&base_currency=" +
          valueFrom
      );
      if (request.status === 200) {
        const { data } = await request.json();

        setValueTaux({ isLoading: false, data: data });
      } else {
        window.alert("Un problème est survenu avec l'API");
        setValueTaux({ isLoading: false });
      }
    };

    fetchConversion();
  }, [valueFrom]);

  const convert = (value, to, from) => {
    if (from === to) return value;
    if (value === 0) return 0;
    return value * data[to].value;
  };

  const handleChangeFrom = (event) => {
    setValueFrom(event.target.value);
    setValueResult(
      validAmount ? convert(amount, valueTo, event.target.value) : 0
    );
  };

  const handleChangeTo = (event) => {
    setValueTo(event.target.value);
    setValueResult(
      validAmount ? convert(amount, event.target.value, valueFrom) : 0
    );
  };

  const handleChangeTextFiled = (event) => {
    var montant = event.target.value;
    const isValid = montant.match(verifIntRegex);
    if (montant.length > 1) montant = montant.replace(replaceRegex, "");
    setValueResult(isValid ? convert(montant, valueTo, valueFrom) : 0);
    setValueTextFild({ amount: montant, validAmount: isValid });
  };

  return (
    <div className="row">
      <h3>Convertisseur</h3>
      <div className="col s8">
        <div className="row">
          <DropBox
            title="FROM"
            name="inputDevises"
            id="inputDevises"
            onChange={handleChangeFrom}
            value={valueFrom}
          />
          <DropBox
            title="To"
            name="outputDevises"
            id="outputDevises"
            onChange={handleChangeTo}
            value={valueTo}
          />
        </div>
        <div className="row">
          <TextField
            value={amount}
            onChange={handleChangeTextFiled}
            validAmount={validAmount}
          />
          <div className="input-field col s12">
            <h5>Result : {isLoading ? <Spinner /> : valueResult}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convertisseur;
