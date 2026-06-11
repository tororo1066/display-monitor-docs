import React from "react";
import "./styles.css";
import {Parameter} from "@site/src/components/DataListFeatures/DataList";

type Props = {
    parameters: Parameter[];
    selectedParameter: Parameter;
    onSelectParameter: (param: Parameter) => void;
};

const ParameterList: React.FC<Props> = ({ parameters, selectedParameter, onSelectParameter }) => {
    return (
        <div className="sidebar list-scroll-lock">
            <h2 className="sidebar-title">パラメータ一覧</h2>
            {parameters.sort((a, b) => {
                return a.name.localeCompare(b.name);
            }).map((param) => (
                <button
                    key={param.name}
                    className={`list-button ${selectedParameter === param ? "active" : ""}`}
                    onClick={() => onSelectParameter(param)}
                >
                    {param.name}
                </button>
            ))}
        </div>
    );
};

export default ParameterList;
