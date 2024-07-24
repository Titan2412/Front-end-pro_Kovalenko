import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData } from "../../store/swapi/swapiThunks";
import { ClearData } from "../../store/swapi/swapiActions";
import style from "./SwapiList.module.scss";

export function SwapiList() {
  const [path, setPath] = useState();
  const dispatch = useDispatch();
  const BASE_URL = "https://swapi.dev/api/";
  const { data, loading } = useSelector((state) => state.swapi);
  const { form, formInput, formText, btn, fetchingText, btnClear, dataText } = style;

  const handlePathChange = (e) => {
    setPath(e.target.value);
  };

  const handleFetchData = () => {
    const url = `${BASE_URL}${path}`;
    dispatch(fetchSwapiData(url));
    setPath("");
  };

  const handleClearData = () => {
    dispatch(ClearData());
    setPath("");
  };
  const renderData = () => {
    if (data.length === 0) {
      return <p className={dataText}>Немає даних</p>;
    } else {
      return (
        <ul className={fetchingText}>
          {data.map((item, index) => (
            <li key={index}>
              <h3>{item.name || item.title || `Item ${index + 1}`}</h3>
              <ul>
                {Object.entries(item).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong>{" "}
                    {Array.isArray(value) ? value.join(", ") : value}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <div className={form}>
        <p className={formText}>https://swapi.dev/api/</p>
        <input
          className={formInput}
          type="text"
          value={path}
          onChange={handlePathChange}
        />
        <button className={btn} onClick={handleFetchData}>
          Отримати інформацію
        </button>
      </div>
      {loading && <p>Завантаження...</p>}
      {renderData()}
      <button className={btnClear} onClick={handleClearData}>
        Очистити
      </button>
    </div>
  );
}
