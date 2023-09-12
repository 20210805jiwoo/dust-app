import React from "react";
import "./Dust.css";

function Grade({ grade }) {
    console.log({ grade });
    switch (grade) {
    case "1":
        return <b style={{ color: "blue" }}>좋음!</b>;
    break;
    case "2":
        return <b style={{ color: "green" }}>보통</b>;
        break;
    case "3":
        return <b style={{ color: "orange" }}>나쁨!</b>;
        break;
    case "4":
        return <b style={{ color: "red" }}>매우 나쁨!!</b>;
        break;
    }
}

function Dust({
    date,
    pm10val,
    pm10gr,
    pm25val,
    pm25gr,
    o3val,
    o3gr,
    coval,
    cogr,
    no2val,
    no2gr,
}) {
  // console.log(id);
    return (
    <div className="Dust">
        <h3>송파구의 현재 대기질 현황: </h3>
        <div className="date">측정일시 : {date}</div>
        <p className="10">
        PM10 : <b>{pm10val}</b>μg/m³
        <br />
        grade: <Grade grade={pm10gr} />
        </p>
        <p className="25">
        PM25 : <b>{pm25val}</b>μg/m³
        <br />
        grade: <Grade grade={pm25gr} />
        </p>
        <div className="flex">
            <p>
            오존
            <br />
            {o3val}ppm
            <br />
            <Grade grade={o3gr} />
        </p>
        <p>
            일산화탄소
            <br />
            {coval}ppm
            <br />
            <Grade grade={cogr} />
        </p>
        <p>
            이산화질소
            <br />
            {no2val}ppm
            <br />
            <Grade grade={no2gr} />
        </p>
        </div>
    </div>
    );
}

export default Dust;