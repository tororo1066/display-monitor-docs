import React from "react";
import {ClassData} from "@site/src/components/DataListFeatures/DataList";

type Props = {
    selectedClass: ClassData
};

const ClassDetail: React.FC<Props> = ({ selectedClass }) => {
    if (!selectedClass) return <div className="detail-view">クラスを選択してください</div>;

    return (
        <div className="detail-view list-scroll-lock">
            <h2 className="detail-title">{selectedClass.name}</h2>
            {selectedClass.description}
        </div>
    );
};

export default ClassDetail;
