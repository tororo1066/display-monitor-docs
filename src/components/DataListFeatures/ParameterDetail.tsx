import React from "react";
import {Parameter} from "@site/src/components/DataListFeatures/DataList";

type Props = {
    selectedParameter: Parameter;
};

const ParameterDetail: React.FC<Props> = ({ selectedParameter }) => {
    if (!selectedParameter) return <div className="detail-view">パラメータを選択してください</div>;

    return (
        <div className="detail-view">
            <h2 className="detail-title">{selectedParameter.name}</h2>
            <div className="detail-description">{selectedParameter.description}</div>
            <br/>
            タイプ: <a href="#" onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#Type/" + selectedParameter.type;
            }}>
            {selectedParameter.type}
        </a>
        </div>
    );
};

export default ParameterDetail;
